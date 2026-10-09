import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { aboutStats, processSteps, services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero-atmosphere relative overflow-hidden text-foam">
        <div className="animate-drift pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-sea-400/15 blur-3xl" />
        <div className="animate-drift pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-ocean-700/40 blur-3xl [animation-delay:2s]" />

        <div className="relative mx-auto grid min-h-[78vh] max-w-6xl items-end gap-10 px-4 pb-0 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-6 md:pt-20">
          <div className="pb-10 md:pb-16">
            <p className="animate-rise text-xs tracking-[0.28em] text-sea-300 uppercase">
              {site.englishName}
            </p>
            <h1 className="animate-rise-delay-1 mt-4 font-display text-5xl leading-tight tracking-wide md:text-6xl lg:text-7xl">
              {site.name}
            </h1>
            <p className="animate-rise-delay-2 mt-5 max-w-md text-lg text-foam/75 md:text-xl">
              {site.tagline}——合箱打包、干线清关到派送，一条链路说清楚。
            </p>
            <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
              <Link
                href="/process"
                className="rounded-md bg-sea-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sea-400"
              >
                查看集运流程
              </Link>
              <Link
                href="/pricing"
                className="rounded-md border border-white/25 px-5 py-2.5 text-sm text-foam transition hover:bg-white/5"
              >
                了解收费标准
              </Link>
            </div>
          </div>

          <div className="relative hidden h-full min-h-[320px] md:block" aria-hidden>
            <OceanVisual />
          </div>
        </div>
        <div className="wave-divider h-12 w-full md:h-16" />
      </section>

      <section className="section-wash border-b border-mist-200/80">
        <div className="mx-auto grid max-w-6xl gap-3 px-4 py-8 sm:grid-cols-3 md:px-6">
          <QuickLink href="/estimate" title="运费估算" desc="输入重量尺寸，快速粗算" />
          <QuickLink href="/warehouse" title="收货仓库" desc="复制会员仓地址寄件" />
          <QuickLink href="/guide" title="集运须知" desc="打包、清关与违禁说明" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="服务线路"
          title="为跨境买家与小微卖家准备的集运方案"
          description="从珠三角收货到目的地签收，按货物属性选择海运、海快或空运。"
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
            查看全部服务介绍 →
          </Link>
        </div>
      </section>

      <section className="bg-mist-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <SectionHeading
            eyebrow="六步完成"
            title="集运流程一目了然"
            description="注册、寄仓、预报、合箱、支付、签收——每一步都有站内指引。"
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
              阅读完整流程说明 →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.22em] text-sea-500 uppercase">关于壹家</p>
            <h2 className="mt-3 font-display text-3xl text-ocean-900 md:text-4xl">
              把复杂的跨境物流，做成可预期的日常服务
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              {site.name}
              扎根珠三角仓配网络，面向台湾、港澳及东南亚目的地提供集运合箱与专线干线。我们强调计费透明、节点可查与人工跟进，让个人买家与店铺补货都能安心托付。
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

      <CtaBanner
        title="准备寄出第一票包裹了吗？"
        description="复制仓库地址开始购物，或先估算运费、咨询线路是否适合您的货物。"
        primaryHref="/warehouse"
        primaryLabel="获取仓库地址"
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

function OceanVisual() {
  return (
    <svg
      viewBox="0 0 480 420"
      className="absolute inset-0 h-full w-full opacity-90"
      role="img"
      aria-label="海运抽象插画"
    >
      <defs>
        <linearGradient id="hull" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5ec4b8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1a4563" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        d="M40 280c60-30 120-10 180-20s120-40 180-20 80 40 100 30"
        stroke="#2aa89a"
        strokeWidth="2"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M20 320c70-20 130 10 200 0s140-35 200-10 80 25 120 10"
        stroke="#5ec4b8"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M90 250 L250 120 L390 250 L350 250 L250 160 L150 250 Z"
        fill="url(#hull)"
        opacity="0.85"
      />
      <rect x="220" y="160" width="18" height="90" rx="2" fill="#f8fbfc" opacity="0.35" />
      <circle cx="250" cy="300" r="48" fill="#2aa89a" opacity="0.12" />
      <text
        x="250"
        y="390"
        textAnchor="middle"
        fill="#5ec4b8"
        fontSize="14"
        letterSpacing="4"
        opacity="0.7"
      >
        YIJIA OCEAN
      </text>
    </svg>
  );
}
