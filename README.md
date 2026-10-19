# 鲸鱼海运（Whale Ocean Shipping）

跨境集运 / 海运专线营销官网演示项目。品牌、文案与视觉均为原创，面向「鲸鱼海运」占位内容，便于后续替换真实价格、地址与客服渠道。

## 技术栈

- Next.js（App Router）+ TypeScript
- Tailwind CSS v4
- 中文营销多页：首页、集运服务、流程、收费、仓库、须知、关于、联系、运费估算

## 本地运行

```bash
npm install
npm run dev
```

开发服务器默认端口：**3847**

打开 [http://127.0.0.1:3847](http://127.0.0.1:3847)

## 其他命令

```bash
npm run build   # 生产构建
npm run start   # 生产模式启动（端口 3847）
npm run lint    # ESLint
```

## 说明

- 联系表单由 `public/contact.php` 通过 QQ 邮箱 SMTP 发送留言，服务器需支持 PHP（含 openssl 扩展）。`npm run build` 后会根据 `.env.local` 的 `SMTP_*` 配置自动生成 `out/contact-config.php`；本地 `npm run dev` 不运行 PHP，表单无法发信。
- 运费估算为前端演示，不会真实下单。
- 仓库地址、电话、ICP 等为占位信息。
