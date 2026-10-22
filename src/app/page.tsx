import type { Metadata } from "next";
import Link from "next/link";
import { QuoteBand } from "@/components/QuoteBand";
import { articles } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";
import { CM3_PER_CAI, faqs, pricingLanes, processSteps, services, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: `${site.name}｜家具・家電・建材大件寄台灣海運`,
  description:
    "海兔集運專做大件寄台灣：沙發、床架、冰箱、洗衣機與裝修建材，依才數計價，木架加固、送貨上樓、到府組裝一次安排。",
  absoluteTitle: true,
});

const quoteNeeds = [
  { title: "商品連結或照片", desc: "淘寶、天貓、京東等連結都可以" },
  { title: "包裝後的長寬高與重量", desc: "不確定可先給商品尺寸與重量" },
  { title: "送貨地址與樓層", desc: "有無電梯、是否需要組裝" },
];

const sofa = { l: 200, w: 90, h: 85 };
const sofaCm3 = sofa.l * sofa.w * sofa.h;
const sofaCai = (sofaCm3 / CM3_PER_CAI).toFixed(1);
const seaLane = pricingLanes[0];
const sofaSeaCost = Math.ceil((sofaCm3 / CM3_PER_CAI) * seaLane.perCai);

export default function HomePage() {
  return (
    <>
      <section className="border-b border-sand-200 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-ember-100 px-3 py-1 text-xs font-semibold text-ember-600">
              大件專線・寄台灣
            </p>
            <h1 className="heading mt-5 text-4xl leading-tight text-char-950 md:text-6xl">
              {site.name}
              <span className="mt-3 block text-2xl text-ember-600 md:text-3xl">
                家具、家電、建材大件寄台灣
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              沙發、床架、電器或大型機械設備，從大陸倉驗貨包裝、海運清關，一路送到台灣家門口。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-ember-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ember-600"
              >
                免費估價
              </Link>
              <Link
                href="/estimate"
                className="rounded-full border-2 border-char-900 px-6 py-3 text-sm font-semibold text-char-900 transition hover:bg-char-900 hover:text-white"
              >
                先算才數
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-char-900 p-7 text-sand-100 md:p-8">
            <p className="text-sm font-semibold text-ember-400">估價只要準備三件事</p>
            <ol className="mt-5 space-y-5">
              {quoteNeeds.map((item, index) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember-500 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-0.5 text-sm text-sand-300">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              href="/contact"
              className="mt-7 block rounded-xl bg-paper py-3 text-center text-sm font-semibold text-char-950 transition hover:bg-sand-100"
            >
              聯繫客服預估 →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="heading ember-bar text-2xl text-char-950 md:text-3xl">專門處理這些大件</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">專業海運大件貨物，每一類都有對應的包裝與送貨方式。</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="card group flex flex-col rounded-2xl p-5 transition hover:border-ember-400"
            >
              <h3 className="heading text-lg text-char-950 group-hover:text-ember-600">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{service.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {service.examples.map((example) => (
                  <li key={example} className="rounded-md bg-sand-100 px-2 py-0.5 text-xs text-ink">
                    {example}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-sand-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="heading ember-bar text-2xl text-char-950 md:text-3xl">大件怎麼計費？看「才數」</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              大件家具和家電體積大、重量相對輕，所以海運主要依包裝後的體積計價。台灣常用的單位是「才」，1 才約等於 1 立方英尺。
            </p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              才數 ＝ 長 × 寬 × 高（公分）÷ 28,317。選擇分箱出貨的款式、去掉多餘外箱，才數就能明顯降低。
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/pricing" className="font-semibold text-ember-600 hover:underline">
                看計費方式 →
              </Link>
              <Link href="/estimate" className="font-semibold text-ember-600 hover:underline">
                用才數試算 →
              </Link>
            </div>
          </div>
          <div className="card rounded-2xl p-6 md:p-8">
            <p className="text-sm text-ink-soft">範例：三人座沙發（含包裝）</p>
            <p className="heading mt-2 text-xl text-char-950">
              {sofa.l} × {sofa.w} × {sofa.h} 公分
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-sand-200 pt-5">
              <div>
                <p className="text-xs text-ink-soft">才數</p>
                <p className="heading mt-1 text-3xl text-ember-600">約 {sofaCai} 才</p>
              </div>
              <div>
                <p className="text-xs text-ink-soft">立方米</p>
                <p className="heading mt-1 text-3xl text-char-950">
                  約 {(sofaCm3 / 1_000_000).toFixed(2)} m³
                </p>
              </div>
            </div>
            <p className="mt-5 rounded-xl bg-ember-100 px-4 py-3 text-sm text-ember-600">
              海運家具每才 ¥{seaLane.perCai} 起，這張沙發材積運費約 ¥{sofaSeaCost.toLocaleString()} 起
            </p>
            <p className="mt-3 text-xs text-ink-soft">聯繫客服獲取更加優惠價格。</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="heading ember-bar text-2xl text-char-950 md:text-3xl">五步送到家</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-5 md:gap-4">
          {processSteps.map((step) => (
            <li key={step.step} className="relative md:pt-10">
              <span className="absolute left-0 top-0 hidden h-0.5 w-full bg-sand-300 md:block" aria-hidden />
              <span className="heading relative text-sm text-ember-600 md:absolute md:-top-3 md:bg-sand-50 md:pr-2">
                STEP {step.step}
              </span>
              <h3 className="heading mt-1 text-lg text-char-950 md:mt-0">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.desc}</p>
            </li>
          ))}
        </ol>
        <Link href="/process" className="mt-8 inline-block text-sm font-semibold text-ember-600 hover:underline">
          看完整運送流程 →
        </Link>
      </section>

      <section className="border-y border-sand-200 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="heading ember-bar text-2xl text-char-950 md:text-3xl">常見問題</h2>
            <p className="mt-3 text-ink-soft">第一次寄大件，多半會問這幾題。</p>
          </div>
          <div className="divide-y divide-sand-200 border-y border-sand-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-char-950">
                  {faq.q}
                  <span className="text-xl text-ember-500 transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="heading ember-bar text-2xl text-char-950 md:text-3xl">大件知識</h2>
          <Link href="/articles" className="text-sm font-semibold text-ember-600 hover:underline">
            全部文章 →
          </Link>
        </div>
        <ul className="mt-8 divide-y divide-sand-200 border-y border-sand-200">
          {articles.slice(0, 3).map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="group flex flex-col gap-1 py-5 md:flex-row md:items-center md:justify-between md:gap-8"
              >
                <span className="heading text-lg text-char-950 group-hover:text-ember-600">{article.title}</span>
                <span className="text-sm text-ink-soft md:max-w-sm md:text-right">{article.excerpt}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <QuoteBand
        title="有大件要寄回台灣？"
        text="傳商品連結或尺寸給客服，先拿報價再決定，不用先寄貨。"
      />
    </>
  );
}
