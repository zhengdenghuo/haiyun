import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { aboutStats, promises, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "关于壹家",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`关于${site.name}`}
        description="我们相信跨境物流不必神秘：地址清晰、费用可预期、异常有人跟。壹家海运把仓配与干线串成一条可理解的服务。"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl text-ocean-900">品牌简介</h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {site.name}（{site.englishName}）面向个人买家、留学生家庭与小微跨境店铺，提供大陆收货、合箱加固、海运空运专线及目的地派送。团队深耕珠三角港口与仓配协同，强调「小票也能被认真对待」。
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              本站文案与数据均为演示占位，便于后续替换为真实企业介绍、资质与媒体报道。
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
          <h2 className="font-display text-3xl text-ocean-900">服务承诺</h2>
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
        title="想了解合作或企业月结？"
        description="留下联系方式与大致月出货量，商务同事会与您对接。"
        primaryHref="/contact"
        primaryLabel="商务咨询"
      />
    </>
  );
}
