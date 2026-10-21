import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: "聯絡我們｜大件寄台灣免費估價",
  description: "填寫品項、尺寸與送貨地區，海兔集運客服會回覆大件寄台灣的報價與包裝建議，估價不收費。",
});

export default function ContactPage() {
  const channels = [
    site.phone && { label: "電話", value: site.phone, href: `tel:${site.phone}` },
    site.line && { label: "LINE", value: "加入 LINE 好友", href: site.line },
    site.wechat && { label: "微信", value: site.wechat },
    site.email && { label: "Email", value: site.email, href: `mailto:${site.email}` },
  ].filter(Boolean) as { label: string; value: string; href?: string }[];

  return (
    <>
      <PageIntro
        label="聯絡我們"
        title="傳尺寸，免費估價"
        lead="告訴我們要寄什麼、尺寸多大、送到哪裡，客服會回覆報價與包裝建議。"
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />

        <aside className="space-y-6">
          <div className="rounded-3xl bg-char-900 p-6 text-sand-100 md:p-8">
            <h2 className="heading text-lg text-white">客服資訊</h2>
            {channels.length ? (
              <dl className="mt-4 space-y-3 text-sm">
                {channels.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <dt className="w-14 shrink-0 text-sand-300">{item.label}</dt>
                    <dd>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold text-white hover:text-ember-400"
                          {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-semibold text-white">{item.value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-sand-300">
                電話與 LINE 客服即將開通，目前請先透過左側表單留言，我們會盡快回覆。
              </p>
            )}
            <p className="mt-5 border-t border-white/10 pt-4 text-xs text-sand-300">服務時間：{site.hours}</p>
            {site.lineQr ? (
              <Image
                src={site.lineQr}
                alt="LINE 客服 QR Code"
                width={150}
                height={150}
                className="mt-5 rounded-xl bg-white p-2"
              />
            ) : null}
          </div>

          <div className="card rounded-3xl p-6">
            <h2 className="heading text-lg text-char-950">估價時請提供</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-soft">
              <li>商品連結或照片</li>
              <li>包裝後的長、寬、高與件數</li>
              <li>送貨地區、樓層與有無電梯</li>
              <li>是否需要拆裝、組裝或木架</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
