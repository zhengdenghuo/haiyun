import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { QuoteBand } from "@/components/QuoteBand";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/services",
  title: "大件服務｜家具、家電與建材寄台灣",
  description:
    "海兔集運大件服務：家具海運、大型家電與建材衛浴。依才數計價，提供驗貨拍照、木架加固、到府組裝與送貨上樓。",
});

const handling: Record<string, string[]> = {
  furniture: ["可打木架加固，防撞防壓", "實木與玻璃件建議加購木架", "到府可加購組裝"],
  appliances: ["到倉拍照確認外觀與配件", "保留原廠紙箱與固定材", "注意台灣 110V 電壓規格"],
  building: ["整批到倉後統一出貨", "浴櫃、燈具加強防撞包裝", "可依工程進度分批送貨"],
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        label="大件服務"
        title="三類大件，各有對應的包裝與送法"
        lead="不論是一張沙發還是一批裝修建材，先依品項決定包裝，再安排海運與送貨到府。"
      />

      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="grid scroll-mt-32 gap-8 border-b border-sand-200 py-10 first:pt-0 last:border-0 md:grid-cols-[0.4fr_0.6fr]"
          >
            <div>
              <p className="heading text-5xl text-sand-300">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="heading mt-2 text-2xl text-char-950 md:text-3xl">{service.title}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.examples.map((example) => (
                  <li key={example} className="rounded-full border border-sand-300 px-3 py-1 text-xs text-ink">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-ink">{service.summary}</p>
              {"note" in service ? (
                <p className="mt-3 inline-block rounded-lg bg-ember-100 px-3 py-1.5 text-sm font-semibold text-ember-600">
                  備註：{service.note}
                </p>
              ) : null}
              <div className="card mt-5 rounded-2xl p-5">
                <p className="text-sm font-semibold text-ember-600">我們怎麼處理</p>
                <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                  {(handling[service.id] ?? []).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-ember-500" aria-hidden>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <QuoteBand title="不確定屬於哪一類？" text="把商品連結傳給客服，我們會直接告訴你怎麼包、怎麼送、大概多少錢。" />
    </>
  );
}
