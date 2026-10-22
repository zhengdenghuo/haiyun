import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { aboutStats, promises, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "東莞虎門台灣集運倉｜關於鯨魚海運",
  description:
    "鯨魚海運紮根珠三角倉配網絡，專注大陸至台灣、港澳及東南亞的跨境集運，強調計費透明、軌跡可查與專屬客服跟進。",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`關於${site.name}：東莞虎門台灣集運倉`}
        description="我們相信跨境物流不必神秘：地址清晰、費用可預期、異常有人跟。鯨魚海運把倉配與幹線串成一條可理解的服務。"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl text-ocean-900">品牌簡介</h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {site.name}（{site.englishName}）面向個人買家、留學生家庭與小微跨境店鋪，提供大陸收貨、合箱加固、海運空運專線及目的地派送。團隊深耕珠三角港口與倉配協同，強調「小票也能被認真對待」。
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="soft-panel rounded-xl p-5">
                <dt className="text-xs text-ink-muted">{stat.label}</dt>
                <dd className="mt-2 font-display text-2xl text-ocean-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="promise" className="scroll-mt-24 bg-mist-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="font-display text-3xl text-ocean-900">服務承諾</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {promises.map((item) => (
              <article key={item.title}>
                <h3 className="text-lg font-medium text-ocean-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="想了解合作或企業月結？"
        description="留下聯繫方式與大致月出貨量，商務同事會與您對接。"
        primaryHref="/contact"
        primaryLabel="商務諮詢"
      />
    </>
  );
}
