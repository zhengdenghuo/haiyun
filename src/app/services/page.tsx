import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/services",
  title: "台灣集運服務｜海運・海快包稅・空運專線",
  description:
    "大陸寄台灣海運專線、海快包稅、空運普貨與港澳、東南亞線路，提供合箱加固、驗貨拍照、分箱等倉內增值服務，依貨物屬性推薦最合適的集運方案。",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="集運服務介紹"
        description="鯨魚海運提供合箱集運、海運空運專線與增值倉內服務。按目的地與貨性選擇合適通道，減少拆單煩惱。"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-4 border-b border-mist-200 pb-10 last:border-0 md:grid-cols-[120px_1fr]"
            >
              <p className="font-display text-4xl text-sea-300/90">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h2 className="font-display text-2xl text-ocean-900 md:text-3xl">{service.title}</h2>
                <p className="mt-3 max-w-3xl text-ink-muted leading-relaxed">{service.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/85">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sea-400" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="font-display text-3xl text-ocean-900">倉內增值服務</h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            在申請合箱時可告知客服選擇下列服務，費用計入運費賬單，明細可向客服索取核對。
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["加固與防撞", "氣泡柱、護角、纏膜，適合陶瓷、燈具、瓶裝品。"],
              ["驗貨拍照", "開箱拍攝商品外觀與配件清單，降低糾紛成本。"],
              ["分箱 / 合箱", "按收件地址或品類重新分裝，控制單票體積。"],
              ["去除發票吊牌", "減少清關敏感信息，需保留可備註說明。"],
              ["代取件上門", "珠三角指定區域可預約上門取件（需提前一天）。"],
              ["企業月結", "穩定出貨量的店鋪可申請對公賬戶與月結賬單。"],
            ].map(([title, desc]) => (
              <div key={title}>
                <h3 className="text-lg font-medium text-ocean-900">{title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="不確定該選哪條線路？"
        description="告訴我們貨物品類、大致重量與期望時效，客服會給出推薦方案。"
      />
    </>
  );
}
