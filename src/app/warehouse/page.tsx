import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { warehouseInfo } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/warehouse",
  title: "東莞集運收貨倉庫地址",
  description:
    "鯨魚海運東莞虎門收貨倉地址與填寫方式。淘寶、天貓、京東、拼多多下單時填寫倉庫地址並註明專屬編號，包裹入庫後即可安排合箱集運到台灣。",
});

export default function WarehousePage() {
  const rows = [
    ["收件人", warehouseInfo.receiverHint],
    ["省份", warehouseInfo.province],
    ["城市", warehouseInfo.city],
    ["區鎮", warehouseInfo.district],
    ["詳細地址", warehouseInfo.detail],
    ["電話", warehouseInfo.phone],
    ["郵編", warehouseInfo.postcode],
  ];

  return (
    <>
      <PageHero
        eyebrow="Warehouse"
        title="東莞虎門集運收貨倉庫"
        description="將電商平台的收件信息填寫為鯨魚海運提供的倉庫地址，並在收件人後註明您的專屬編號。"
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
            <h2 className="font-display text-2xl text-ocean-900">填寫注意</h2>
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
        title="地址填好了，下一步去預報"
        description="包裹寄出後請將快遞單號發給客服登記，加快入庫匹配。"
        primaryHref="/process"
        primaryLabel="查看集運流程"
        secondaryHref="/contact"
        secondaryLabel="聯繫客服"
      />
    </>
  );
}
