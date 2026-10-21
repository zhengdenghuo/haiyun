import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { QuoteBand } from "@/components/QuoteBand";
import { pageMetadata } from "@/lib/seo";
import { addOnFees, pricingLanes } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/pricing",
  title: "計費方式｜大件家具海運、海快、空運價格",
  description:
    "大件寄台灣價格一覽：海運家具每公斤 ¥4.5 起、每才 ¥25 起，海快每公斤 ¥10 起，空運每公斤 ¥25 起，附才數與半拋計算方式，以及木架、組裝、搬運上樓等加購項目。",
});

export default function PricingPage() {
  return (
    <>
      <PageIntro
        label="計費方式"
        title="三條線路，價格先講清楚"
        lead="海運家具按重量與才數取較高者計費，海快、空運按半拋計算。每一筆都會先報價，確認後才寄倉。"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="heading ember-bar text-xl text-char-950 md:text-2xl">線路價格</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {pricingLanes.map((lane) => (
            <article key={lane.id} className="card flex flex-col rounded-3xl p-6">
              <h3 className="heading text-lg text-char-950">{lane.name}</h3>
              <p className="heading mt-4 text-3xl text-ember-600">{lane.unit}</p>
              <dl className="mt-4 space-y-2 border-t border-sand-200 pt-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-soft">材積</dt>
                  <dd className="font-semibold text-char-950">{lane.volume}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-soft">參考時效</dt>
                  <dd className="font-semibold text-char-950">{lane.eta}</dd>
                </div>
              </dl>
              <p className="mt-4 flex-1 text-xs leading-relaxed text-ink-soft">{lane.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand-100">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:px-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-char-900 p-6 text-sand-100 md:p-8">
            <h2 className="heading text-xl text-white">海運家具：重量與才數取較高者</h2>
            <p className="heading mt-5 rounded-xl bg-white/5 px-4 py-3 text-base text-ember-400">
              才數 ＝ 長 × 寬 × 高（公分）÷ 28,317
            </p>
            <p className="mt-4 text-sm leading-relaxed text-sand-300">
              分別計算「實重 × ¥4.5」與「才數 × ¥25」，取較高的金額。1 立方米約等於 35.3 才。
            </p>
          </div>
          <div className="rounded-3xl bg-char-900 p-6 text-sand-100 md:p-8">
            <h2 className="heading text-xl text-white">海快、空運：按半拋計算</h2>
            <p className="heading mt-5 rounded-xl bg-white/5 px-4 py-3 text-base text-ember-400">
              體積重 ＝ 長 × 寬 × 高（公分）÷ 6,000
            </p>
            <p className="mt-4 text-sm leading-relaxed text-sand-300">
              體積重大於實重時，計費重 ＝ 實重 ＋（體積重 − 實重）÷ 2；否則按實重計。例：實重 5 公斤、體積重 10 公斤，計費重 7.5 公斤。
            </p>
          </div>
          <Link href="/estimate" className="text-sm font-semibold text-ember-600 hover:underline lg:col-span-2">
            用才數試算工具一次算三條線路 →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
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
          <li>・ 所有貨物依實際品名與貨值申報；海快線路不包稅，如需繳稅由收件人依台灣海關規定繳納。</li>
          <li>・ 以上為參考價，正式費用以倉庫實際量測與客服報價為準。</li>
        </ul>
      </section>

      <QuoteBand title="想知道自己的貨要多少？" text="傳尺寸或商品連結給客服，報價後再決定要不要寄。" />
    </>
  );
}
