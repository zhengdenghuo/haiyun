import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { addOnFees, pricingRows } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/pricing",
  title: "集運收費標準｜台灣海運、海快、空運運費",
  description:
    "台灣集運運費怎麼算？海運家具、海快、空運每公斤單價與參考時效一覽，附材積與半拋計算方式，以及加固、拍照等增值服務費用。",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="集運收費標準：台灣海運、海快、空運運費"
        description="以下為參考價，實際以倉庫測量與當期線路公告為準。海運家具按重量與材積較高者計費，海快、空運按半拋計算。"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-ocean-800/20 text-ink-muted">
                <th className="py-3 pr-4 font-medium">線路</th>
                <th className="py-3 pr-4 font-medium">重量單價</th>
                <th className="py-3 pr-4 font-medium">材積參考</th>
                <th className="py-3 pr-4 font-medium">參考時效</th>
                <th className="py-3 font-medium">說明</th>
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
          需要粗算一票貨物？使用{" "}
          <Link href="/estimate" className="text-sea-500 hover:underline">
            運費估算
          </Link>{" "}
          工具。
        </p>
      </section>

      <section className="bg-mist-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="font-display text-3xl text-ocean-900">增值服務費用</h2>
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
        <h2 className="font-display text-3xl text-ocean-900">計費規則摘要</h2>
        <ul className="mt-6 max-w-3xl space-y-3 text-ink-muted">
          <li>· 海運家具：重量運費（每公斤 ¥4.5 起）與材積運費（每材 ¥25 起）取較高者；材數 ＝ 長 × 寬 × 高（cm）÷ 28,317。</li>
          <li>· 海快、空運按半拋計算：體積重（kg）＝ 長 × 寬 × 高（cm）÷ 6000；體積重大於實重時，計費重 ＝ 實重 ＋（體積重 − 實重）÷ 2，否則按實重計。</li>
          <li>· 單票有最低計費重，不足按最低重計；超長、超重另計附加費。</li>
          <li>· 偏遠地區、外島、特殊地址可能產生派送附加，下單前可諮詢客服。</li>
          <li>· 價格如有調整，以客服最新報價為準。</li>
        </ul>
      </section>

      <CtaBanner
        title="報價有疑問？直接問我們"
        description="發送品類、重量、尺寸與目的地，獲取更貼近的預估。"
        primaryHref="/contact"
        primaryLabel="提交諮詢"
      />
    </>
  );
}
