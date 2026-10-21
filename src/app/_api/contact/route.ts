import nodemailer from "nodemailer";

const LIMITS = { name: 50, phone: 50, dest: 50, content: 2000 };
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;

const recentByIp = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const hits = (recentByIp.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  hits.push(now);
  recentByIp.set(ip, hits);
  return hits.length > RATE_MAX;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "請求格式不正確。" }, { status: 400 });
  }

  const field = (key: keyof typeof LIMITS) => String(body[key] ?? "").trim();
  const name = field("name");
  const phone = field("phone");
  const dest = field("dest");
  const content = field("content");

  if (String(body.website ?? "").trim()) {
    return Response.json({ ok: true });
  }

  if (!name || !phone || !content) {
    return Response.json({ error: "請完整填寫姓名、聯繫方式與諮詢內容。" }, { status: 400 });
  }

  if (
    name.length > LIMITS.name ||
    phone.length > LIMITS.phone ||
    dest.length > LIMITS.dest ||
    content.length > LIMITS.content
  ) {
    return Response.json({ error: "填寫內容過長，請精簡後再提交。" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json({ error: "提交過於頻繁，請稍後再試或直接電話聯繫。" }, { status: 429 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("[contact] SMTP_USER / SMTP_PASS 未配置，留言無法發送");
    return Response.json({ error: "留言服務暫未開通，請直接電話或微信聯繫客服。" }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || "smtp.qq.com",
    port: Number(SMTP_PORT || 465),
    secure: Number(SMTP_PORT || 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["姓名 / 稱呼", name],
    ["手機或微信", phone],
    ["目的地", dest || "未填寫"],
    ["諮詢內容", content],
  ];

  try {
    await transporter.sendMail({
      from: `"海兔集運官網" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      subject: `官網諮詢：${name}（${phone}）`,
      text: rows.map(([label, value]) => `${label}：${value}`).join("\n"),
      html: rows
        .map(
          ([label, value]) =>
            `<p><strong>${label}：</strong>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`,
        )
        .join(""),
    });
  } catch (error) {
    console.error("[contact] 發送郵件失敗", error);
    return Response.json({ error: "提交失敗，請稍後再試或直接電話聯繫。" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
