import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { QuoteBand } from "@/components/QuoteBand";
import { pageMetadata } from "@/lib/seo";
import { addOnFees, pricingPlans } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/pricing",
  title: "計費方式｜大件家具海運依才數計價",
  description:
    "大件家具家電寄台灣怎麼計費？說明才數與立方米算法、併櫃與整櫃方案的差別，以及木架、拆裝、搬運上樓等加購項目。",
});

export default function PricingPage() {
  return (
    <>
      <PageIntro
        label="計費方式"
        title="大件依才數計價，先報價再寄"
        lead="運費主要由包裝後的體積決定，再加上送貨與包裝等加購項目。每一筆都會先報價，確認後才寄倉。"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl bg-char-900 p-6 text-sand-100 md:p-8">
            <h2 className="heading text-xl text-white">才數怎麼算</h2>
            <p className="mt-4 text-sm leading-relaxed text-sand-300">台灣海運常以「才」計算體積，1 才約等於 1 立方英尺。</p>
            <p className="heading mt-5 rounded-xl bg-white/5 px-4 py-3 text-lg text-ember-400">
              長 × 寬 × 高（公分）÷ 28,317 ＝ 才數
            </p>
            <p className="mt-4 text-sm leading-relaxed text-sand-300">
              以 1 立方米換算約 35.3 才。多件貨物請分別量測後加總。
            </p>
            <Link href="/estimate" className="mt-6 inline-block text-sm font-semibold text-ember-400 hover:underline">
              用工具試算 →
            </Link>
          </div>

          <div>
            <h2 className="heading ember-bar text-xl text-char-950">運送方案</h2>
            <div className="mt-5 space-y-4">
              {pricingPlans.map((plan) => (
                <article key={plan.name} className="card rounded-2xl p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="heading text-lg text-char-950">{plan.name}</h3>
                    <p className="text-sm font-semibold text-ember-600">{plan.basis}</p>
                  </div>
                  <p className="mt-2 text-sm text-ink">適合：{plan.fits}</p>
                  <p className="mt-1 text-xs text-ink-soft">{plan.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-100">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="heading ember-bar text-xl text-char-950 md:text-2xl">加購項目</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-char-900 text-char-950">
                  <th className="py-3 pr-4 font-semibold">項目</th>
                  <th className="py-3 pr-4 font-semibold">費用</th>
                  <th className="py-3 font-semibold">說明</th>
                </tr>
              </thead>
              <tbody>
                {addOnFees.map((item) => (
                  <tr key={item.name} className="border-b border-sand-300">
                    <td className="py-3.5 pr-4 font-semibold text-char-950">{item.name}</td>
                    <td className="py-3.5 pr-4 text-ember-600">{item.fee}</td>
                    <td className="py-3.5 text-ink-soft">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-6 space-y-1.5 text-sm text-ink-soft">
            <li>・ 稅費依台灣海關規定繳納，所有貨物依實際品名與貨值申報。</li>
            <li>・ 正式費用以倉庫實際量測與客服報價為準。</li>
          </ul>
        </div>
      </section>

      <QuoteBand title="想知道自己的貨要多少？" text="傳尺寸或商品連結給客服，報價後再決定要不要寄。" />
    </>
  );
}
