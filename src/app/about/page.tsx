import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { QuoteBand } from "@/components/QuoteBand";
import { pageMetadata } from "@/lib/seo";
import { promises, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "關於海兔｜專做大件寄台灣的集運團隊",
  description:
    "海兔集運專注大件寄台灣：家具、家電與建材。先估價再寄倉、出倉前拍照、依品項專門包裝，送貨前預約時間。",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="關於海兔"
        title="只做大件，所以更懂大件"
        lead={`${site.name}專注處理一般集運不方便收的大型貨物，從估價、包裝到送貨上樓都以大件的需求來安排。`}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-2">
        <div className="space-y-4 leading-relaxed text-ink">
          <h2 className="heading ember-bar text-2xl text-char-950">為什麼專做大件</h2>
          <p>
            在大陸買家具、家電和建材，價格與選擇往往更多，但寄回台灣卻常卡在「太大、太重、不好包、送不上樓」。
          </p>
          <p>
            一般小包集運以重量計價、流程為輕小件設計；大件需要的是體積估算、木架包裝、裝櫃規劃與到府搬運。我們把這些環節整合在一起，讓大件也能有清楚的報價與流程。
          </p>
        </div>
        <div id="commitments" className="scroll-mt-32">
          <h2 className="heading ember-bar text-2xl text-char-950">服務承諾</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {promises.map((item) => (
              <article key={item.title} className="card rounded-2xl p-5">
                <h3 className="heading text-lg text-char-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuoteBand title="有大件要寄，先聊聊看" text="告訴我們要寄什麼、送到哪裡，客服會給你完整的建議與報價。" />
    </>
  );
}
