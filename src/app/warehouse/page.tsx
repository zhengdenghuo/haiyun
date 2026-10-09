import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { warehouseInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "收货仓库",
};

export default function WarehousePage() {
  const rows = [
    ["收件人", warehouseInfo.receiverHint],
    ["省份", warehouseInfo.province],
    ["城市", warehouseInfo.city],
    ["区镇", warehouseInfo.district],
    ["详细地址", warehouseInfo.detail],
    ["电话", warehouseInfo.phone],
    ["邮编", warehouseInfo.postcode],
  ];

  return (
    <>
      <PageHero
        eyebrow="Warehouse"
        title="收货仓库"
        description="将电商平台的收件信息填写为您的壹家会员仓地址。下列为示例仓信息，上线后请替换为真实地址。"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="soft-panel rounded-2xl p-6 md:p-8">
            <h2 className="font-display text-2xl text-ocean-900">{warehouseInfo.name}</h2>
            <dl className="mt-6 space-y-4">
              {rows.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-1 border-b border-mist-200 pb-3 sm:grid-cols-[100px_1fr] sm:gap-4"
                >
                  <dt className="text-sm text-ink-muted">{label}</dt>
                  <dd className="text-sm font-medium text-ocean-900 sm:text-base">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside>
            <h2 className="font-display text-2xl text-ocean-900">填写注意</h2>
            <ul className="mt-5 space-y-4">
              {warehouseInfo.tips.map((tip) => (
                <li key={tip} className="text-sm leading-relaxed text-ink-muted">
                  · {tip}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <CtaBanner
        title="地址填好了，下一步去预报"
        description="包裹寄出后请登录会员中心提交快递单号，加快入库匹配。"
        primaryHref="/process"
        primaryLabel="查看集运流程"
        secondaryHref="/contact"
        secondaryLabel="联系客服"
      />
    </>
  );
}
