import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { addOnFees, pricingRows } from "@/lib/site";

export const metadata: Metadata = {
  title: "收费标准",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="收费标准"
        description="以下为示例参考价，实际以仓库测量与当期线路公告为准。计费通常取实重与体积重较大值。"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-ocean-800/20 text-ink-muted">
                <th className="py-3 pr-4 font-medium">线路</th>
                <th className="py-3 pr-4 font-medium">重量单价</th>
                <th className="py-3 pr-4 font-medium">材积参考</th>
                <th className="py-3 pr-4 font-medium">参考时效</th>
                <th className="py-3 font-medium">说明</th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row) => (
                <tr key={row.lane} className="border-b border-mist-200 align-top">
                  <td className="py-4 pr-4 font-medium text-ocean-900">{row.lane}</td>
                  <td className="py-4 pr-4 text-sea-500">{row.unit}</td>
                  <td className="py-4 pr-4">{row.volume}</td>
                  <td className="py-4 pr-4">{row.eta}</td>
                  <td className="py-4 text-ink-muted">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          需要粗算一票货物？使用{" "}
          <Link href="/estimate" className="text-sea-500 hover:underline">
            运费估算
          </Link>{" "}
          工具。
        </p>
      </section>

      <section className="bg-mist-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="font-display text-3xl text-ocean-900">增值服务费用</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addOnFees.map((fee) => (
              <div key={fee.name} className="flex items-baseline justify-between gap-4 border-b border-mist-200 py-3">
                <span className="text-ink">{fee.name}</span>
                <span className="shrink-0 text-sm text-sea-500">{fee.fee}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="font-display text-3xl text-ocean-900">计费规则摘要</h2>
        <ul className="mt-6 max-w-3xl space-y-3 text-ink-muted">
          <li>· 体积重（kg）≈ 长 × 宽 × 高（cm） ÷ 6000；空运常用此公式，海运部分线路按材计。</li>
          <li>· 单票有最低计费重，不足按最低重计；超长、超重另计附加费。</li>
          <li>· 偏远地区、外岛、特殊地址可能产生派送附加，下单前可咨询客服。</li>
          <li>· 价格表为营销示例，用户可在上线前替换为真实价目。</li>
        </ul>
      </section>

      <CtaBanner
        title="报价有疑问？直接问我们"
        description="发送品类、重量、尺寸与目的地，获取更贴近的预估。"
        primaryHref="/contact"
        primaryLabel="提交咨询"
      />
    </>
  );
}
