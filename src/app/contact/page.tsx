import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: "集運客服諮詢｜電話、微信與 LINE 聯繫方式",
  description:
    "聯繫鯨魚海運客服：電話、微信、LINE 與電子郵件，諮詢台灣集運線路、報價或包裹異常，也可直接線上留言。",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="聯繫我們：集運客服諮詢"
        description="諮詢線路、報價或異常件跟進，歡迎通過電話、即時通訊或下方表單留言。"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-2xl text-ocean-900">客服渠道</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <Info label="全國諮詢熱線" value={site.phone} href={`tel:${site.phone}`} />
              <Info label="服務時間" value={site.hours} />
              <Info label="郵箱" value={site.email} href={`mailto:${site.email}`} />
              <Info label="微信客服" value={site.wechat} />
              <li className="border-b border-mist-200 pb-4">
                <p className="text-ink-muted">LINE</p>
                <a
                  href={site.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-medium text-ocean-900 hover:text-sea-500"
                >
                  點擊加 LINE 好友
                </a>
                <Image
                  src={site.lineQr}
                  alt="LINE 客服二維碼"
                  width={160}
                  height={160}
                  className="mt-3 rounded-md border border-mist-200 bg-white p-2"
                />
              </li>
              <Info label="倉庫地址" value={site.address} />
            </ul>
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
