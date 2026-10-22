// 按品牌加载 env 后再调用 next build。
// Next.js 只会自动加载 .env / .env.local / .env.production(.local)，
// 自定义命名的 .env.<brand>.local 不会被读取，会导致 NEXT_PUBLIC_SITE_URL 落空、
// canonical / sitemap / robots 退化成 127.0.0.1。

import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

const brand = process.argv[2] || "whale";
const projectDir = process.cwd();
const envFile = path.join(projectDir, `.env.${brand}.local`);

if (!existsSync(envFile)) {
  console.error(`[build] 找不到 .env.${brand}.local，已中止。`);
  process.exit(1);
}

process.loadEnvFile(envFile);

// 域名缺失时构建产物会指向 127.0.0.1，直接失败比部署上线更安全。
if (!process.env.NEXT_PUBLIC_SITE_URL) {
  console.error(`[build] .env.${brand}.local 未设置 NEXT_PUBLIC_SITE_URL，已中止。`);
  process.exit(1);
}

const nextBin = path.join(projectDir, "node_modules", "next", "dist", "bin", "next");
const result = spawnSync(process.execPath, [nextBin, "build"], { stdio: "inherit" });

process.exit(result.status ?? 1);
