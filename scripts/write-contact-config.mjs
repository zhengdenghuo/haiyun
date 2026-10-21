import { existsSync, writeFileSync } from "node:fs";
import path from "node:path";
import nextEnv from "@next/env";

const projectDir = process.cwd();
nextEnv.loadEnvConfig(projectDir);

const outDir = path.join(projectDir, "out");
if (!existsSync(outDir)) {
  console.warn("[contact] 未找到 out 目錄，跳過生成 contact-config.php");
  process.exit(0);
}

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
if (!SMTP_USER || !SMTP_PASS) {
  console.warn("[contact] .env.local 未配置 SMTP_USER / SMTP_PASS，留言表單將無法發信");
  process.exit(0);
}

const phpString = (value) => `'${String(value).replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;

const config = {
  host: SMTP_HOST || "smtp.qq.com",
  port: SMTP_PORT || "465",
  user: SMTP_USER,
  pass: SMTP_PASS,
  to: CONTACT_TO || SMTP_USER,
  from_name: "海兔集運官網",
};

const body = Object.entries(config)
  .map(([key, value]) => `    '${key}' => ${phpString(value)},`)
  .join("\n");

writeFileSync(path.join(outDir, "contact-config.php"), `<?php\nreturn array(\n${body}\n);\n`);
console.log("[contact] 已生成 out/contact-config.php");
