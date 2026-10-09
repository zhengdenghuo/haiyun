import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "集运服务",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="集运服务介绍"
        description="壹家海运提供合箱集运、海运空运专线与增值仓内服务。按目的地与货性选择合适通道，减少拆单烦恼。"
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
          <h2 className="font-display text-3xl text-ocean-900">仓内增值服务</h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            在申请合箱时可勾选下列服务，费用计入运费账单，明细可在会员中心核对。
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["加固与防撞", "气泡柱、护角、缠膜，适合陶瓷、灯具、瓶装品。"],
              ["验货拍照", "开箱拍摄商品外观与配件清单，降低纠纷成本。"],
              ["分箱 / 合箱", "按收件地址或品类重新分装，控制单票体积。"],
              ["去除发票吊牌", "减少清关敏感信息，需保留可备注说明。"],
              ["代取件上门", "珠三角指定区域可预约上门取件（需提前一天）。"],
              ["企业月结", "稳定出货量的店铺可申请对公账户与月结账单。"],
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
        title="不确定该选哪条线路？"
        description="告诉我们货物品类、大致重量与期望时效，客服会给出推荐方案。"
      />
    </>
  );
}
