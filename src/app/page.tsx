import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { articles } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";
import { aboutStats, pricingRows, processSteps, services, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: `${site.name}｜台灣集運・大陸寄台灣海運專線`,
  description:
    "鯨魚海運提供大陸寄台灣集運服務：淘寶、拼多多、1688 包裹合箱海運、海快包稅與空運專線，東莞虎門倉收貨，計費透明、客服一對一跟進。",
  absoluteTitle: true,
});

const heroHighlights = [
  { title: "虎門倉收貨", desc: "淘寶、拼多多、1688 皆可寄倉" },
  { title: "三種線路", desc: "海運、海快、空運依需求選" },
  { title: "專人跟進", desc: "電話、微信、LINE 都能聯繫" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-atmosphere relative overflow-hidden text-foam">
        <div className="animate-drift pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-sea-400/15 blur-3xl" />
        <div className="animate-drift pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-ocean-700/40 blur-3xl [animation-delay:2s]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 pt-12 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:pb-14 md:pt-14 lg:min-h-[540px] lg:gap-16">
          <div>
            <p className="animate-rise text-xs tracking-[0.28em] text-sea-300 uppercase">
              {site.englishName}
            </p>
            <h1 className="animate-rise-delay-1 mt-4 font-display text-5xl leading-tight tracking-wide md:text-6xl lg:text-7xl">
              {site.name}
              <span className="mt-3 block text-xl tracking-normal text-sea-300 sm:text-2xl lg:text-3xl">
                台灣集運・大陸寄台灣海運專線
              </span>
            </h1>
            <p className="animate-rise-delay-2 mt-5 max-w-xl text-lg text-foam/75 md:text-xl">
              {site.tagline}——合箱打包、幹線清關到派送，一條鏈路說清楚。
            </p>
            <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
              <Link
                href="/process"
                className="rounded-md bg-sea-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sea-400"
              >
                查看集運流程
              </Link>
              <Link
                href="/pricing"
                className="rounded-md border border-white/25 px-5 py-2.5 text-sm text-foam transition hover:bg-white/5"
              >
                了解收費標準
              </Link>
            </div>
            <ul className="animate-rise-delay-3 mt-10 grid gap-3 text-sm text-foam/80 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <li key={item.title} className="border-l border-sea-400/50 pl-3">
                  <p className="font-medium text-foam">{item.title}</p>
                  <p className="mt-0.5 text-xs text-foam/60">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-rise-delay-2 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-7">
            <p className="text-xs tracking-[0.22em] text-sea-300 uppercase">台灣線路速覽</p>
            <ul className="mt-5 divide-y divide-white/10">
              {pricingRows.slice(0, 3).map((row) => (
                <li key={row.lane} className="flex items-center justify-between gap-4 py-4 first:pt-0">
                  <div>
                    <p className="font-medium text-foam">{row.lane}</p>
                    <p className="mt-1 text-xs text-foam/60">{row.eta}</p>
                  </div>
                  <p className="shrink-0 font-display text-xl text-sea-300">{row.unit}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <p className="text-xs text-foam/50">實際以倉庫測量與客服報價為準</p>
              <Link href="/estimate" className="text-sm font-medium text-sea-300 hover:underline">
                試算運費 →
              </Link>
            </div>
          </div>
        </div>
        <div className="wave-divider h-12 w-full md:h-16" />
      </section>

      <section className="section-wash border-b border-mist-200/80">
        <div className="mx-auto grid max-w-6xl gap-3 px-4 py-8 sm:grid-cols-3 md:px-6">
          <QuickLink href="/estimate" title="運費估算" desc="輸入重量尺寸，快速粗算" />
          <QuickLink href="/warehouse" title="收貨倉庫" desc="向客服取得倉庫地址寄件" />
          <QuickLink href="/guide" title="集運須知" desc="打包、清關與違禁說明" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="服務線路"
          title="為跨境買家與小微賣家準備的集運方案"
          description="從珠三角收貨到目的地簽收，按貨物屬性選擇海運、海快或空運。"
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="border-l-2 border-sea-400/70 pl-5">
              <h3 className="font-display text-xl text-ocean-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.summary}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-ink/80">
                {service.points.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/services" className="text-sm font-medium text-sea-500 hover:underline">
            查看全部服務介紹 →
          </Link>
        </div>
      </section>

      <section className="bg-mist-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <SectionHeading
            eyebrow="六步完成"
            title="集運流程一目瞭然"
            description="溝通、寄倉、預報、合箱、支付、簽收——每一步都有站內指引。"
          />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <li key={step.step} className="relative">
                <p className="font-display text-3xl text-sea-400/80">{step.step}</p>
                <h3 className="mt-2 text-lg font-medium text-ocean-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Link href="/process" className="text-sm font-medium text-sea-500 hover:underline">
              閱讀完整流程說明 →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.22em] text-sea-500 uppercase">關於鯨魚</p>
            <h2 className="mt-3 font-display text-3xl text-ocean-900 md:text-4xl">
              把複雜的跨境物流，做成可預期的日常服務
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              {site.name}
              紮根珠三角倉配網絡，面向台灣、港澳及東南亞目的地提供集運合箱與專線幹線。我們強調計費透明、節點可查與人工跟進，讓個人買家與店鋪補貨都能安心託付。
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex rounded-md bg-ocean-800 px-4 py-2.5 text-sm text-foam transition hover:bg-ocean-700"
            >
              了解品牌故事
            </Link>
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

      <section className="bg-mist-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <SectionHeading
            eyebrow="集運知識"
            title="寄之前，先看這幾篇"
            description="運費怎麼算、哪些東西不能寄、怎麼完成實名認證，常見問題一次整理。"
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="soft-panel group flex h-full flex-col rounded-xl p-5 transition hover:-translate-y-0.5"
                >
                  <h3 className="font-medium leading-snug text-ocean-900 group-hover:text-sea-500">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{article.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/articles" className="text-sm font-medium text-sea-500 hover:underline">
              查看全部集運知識 →
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="準備寄出第一票包裹了嗎？"
        description="複製倉庫地址開始購物，或先估算運費、諮詢線路是否適合您的貨物。"
        primaryHref="/warehouse"
        primaryLabel="獲取倉庫地址"
      />
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs tracking-[0.22em] text-sea-500 uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl text-ocean-900 md:text-4xl">{title}</h2>
      <p className="mt-3 text-ink-muted">{description}</p>
    </div>
  );
}

function QuickLink({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-mist-200 bg-white/70 px-4 py-4 transition hover:border-sea-300 hover:bg-white"
    >
      <p className="font-medium text-ocean-900 group-hover:text-sea-500">{title}</p>
      <p className="mt-1 text-sm text-ink-muted">{desc}</p>
    </Link>
  );
}
