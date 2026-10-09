import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "联系我们",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="联系我们"
        description="咨询线路、报价或异常件跟进，欢迎通过电话、即时通讯或下方表单留言。"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-2xl text-ocean-900">客服渠道</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <Info label="全国咨询热线" value={site.phone} href={`tel:${site.phone}`} />
              <Info label="服务时间" value={site.hours} />
              <Info label="邮箱" value={site.email} href={`mailto:${site.email}`} />
              <Info label="微信客服" value={site.wechat} />
              <Info label="LINE" value={site.line} />
              <Info label="仓库地址" value={site.address} />
            </ul>
            <p className="mt-8 text-xs leading-relaxed text-ink-muted">
              以上均为占位信息，便于演示站内结构。正式上线前请替换为真实号码与社交账号。
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function Info({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <li className="border-b border-mist-200 pb-4">
      <p className="text-ink-muted">{label}</p>
      {href ? (
        <a href={href} className="mt-1 inline-block font-medium text-ocean-900 hover:text-sea-500">
          {value}
        </a>
      ) : (
        <p className="mt-1 font-medium text-ocean-900">{value}</p>
      )}
    </li>
  );
}
