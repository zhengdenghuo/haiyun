<?php
// 官網「提交諮詢」留言：通過 QQ 郵箱 SMTP 發信。
// 郵箱配置由 npm run build 從 .env.local 生成到同目錄的 contact-config.php。

header('Content-Type: application/json; charset=utf-8');
date_default_timezone_set('Asia/Shanghai');

$limits = array('name' => 50, 'phone' => 50, 'dest' => 50, 'content' => 2000);
$rateWindow = 600;
$rateMax = 5;

function respond($status, $body)
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

function text_length($value)
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

function is_rate_limited($ip, $window, $max)
{
    $file = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'haiyun_contact_' . md5($ip) . '.json';
    $now = time();
    $fp = @fopen($file, 'c+');
    if (!$fp) {
        return false;
    }
    flock($fp, LOCK_EX);
    $hits = json_decode(stream_get_contents($fp), true);
    $hits = is_array($hits) ? $hits : array();
    $recent = array();
    foreach ($hits as $t) {
        if ($now - (int) $t < $window) {
            $recent[] = (int) $t;
        }
    }
    $recent[] = $now;
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, json_encode($recent));
    flock($fp, LOCK_UN);
    fclose($fp);
    return count($recent) > $max;
}

function encode_header($value)
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

function smtp_send($config, $to, $subject, $text, &$error)
{
    $port = (int) $config['port'];
    $remote = ($port === 465 ? 'ssl://' : 'tcp://') . $config['host'] . ':' . $port;
    $fp = @stream_socket_client($remote, $errno, $errstr, 15);
    if (!$fp) {
        $error = 'connect failed: ' . $errstr;
        return false;
    }
    stream_set_timeout($fp, 15);

    $read = function () use ($fp) {
        $data = '';
        while (($line = fgets($fp, 515)) !== false) {
            $data .= $line;
            if (isset($line[3]) && $line[3] === ' ') {
                break;
            }
        }
        return $data;
    };
    $command = function ($line, $expect) use ($fp, $read, &$error) {
        if ($line !== null) {
            fwrite($fp, $line . "\r\n");
        }
        $response = $read();
        if ((int) substr($response, 0, 3) !== $expect) {
            $error = trim($response);
            return false;
        }
        return true;
    };

    $message = implode("\r\n", array(
        'Date: ' . date('r'),
        'From: ' . encode_header($config['from_name']) . ' <' . $config['user'] . '>',
        'To: <' . $to . '>',
        'Subject: ' . encode_header($subject),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
    )) . "\r\n\r\n" . chunk_split(base64_encode($text), 76, "\r\n");

    $ok = $command(null, 220)
        && $command('EHLO ' . (isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'localhost'), 250)
        && $command('AUTH LOGIN', 334)
        && $command(base64_encode($config['user']), 334)
        && $command(base64_encode($config['pass']), 235)
        && $command('MAIL FROM:<' . $config['user'] . '>', 250)
        && $command('RCPT TO:<' . $to . '>', 250)
        && $command('DATA', 354)
        && $command($message . "\r\n.", 250);

    @fwrite($fp, "QUIT\r\n");
    fclose($fp);
    return $ok;
}

if (!isset($_SERVER['REQUEST_METHOD']) || $_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, array('error' => '請求方式不正確。'));
}

$body = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($body)) {
    respond(400, array('error' => '請求格式不正確。'));
}

$fields = array();
foreach ($limits as $key => $max) {
    $fields[$key] = isset($body[$key]) ? trim((string) $body[$key]) : '';
}

if (isset($body['website']) && trim((string) $body['website']) !== '') {
    respond(200, array('ok' => true));
}

if ($fields['name'] === '' || $fields['phone'] === '' || $fields['content'] === '') {
    respond(400, array('error' => '請完整填寫姓名、聯繫方式與諮詢內容。'));
}

foreach ($limits as $key => $max) {
    if (text_length($fields[$key]) > $max) {
        respond(400, array('error' => '填寫內容過長，請精簡後再提交。'));
    }
}

$ip = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'unknown';
if (is_rate_limited($ip, $rateWindow, $rateMax)) {
    respond(429, array('error' => '提交過於頻繁，請稍後再試或直接電話聯繫。'));
}

$configFile = __DIR__ . '/contact-config.php';
$config = is_file($configFile) ? require $configFile : null;
if (!is_array($config) || empty($config['user']) || empty($config['pass'])) {
    error_log('[contact] contact-config.php 缺失或未配置 SMTP 帳號');
    respond(503, array('error' => '留言服務暫未開通，請直接電話或微信聯繫客服。'));
}

$text = implode("\n", array(
    '姓名 / 稱呼：' . $fields['name'],
    '手機或微信：' . $fields['phone'],
    '目的地：' . ($fields['dest'] !== '' ? $fields['dest'] : '未填寫'),
    '諮詢內容：' . $fields['content'],
));
$subject = '官網諮詢：' . $fields['name'] . '（' . $fields['phone'] . '）';
$to = !empty($config['to']) ? $config['to'] : $config['user'];

$error = '';
if (!smtp_send($config, $to, $subject, $text, $error)) {
    error_log('[contact] 發送郵件失敗: ' . $error);
    respond(502, array('error' => '提交失敗，請稍後再試或直接電話聯繫。'));
}

respond(200, array('ok' => true));
