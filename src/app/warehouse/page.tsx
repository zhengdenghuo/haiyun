import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { QuoteBand } from "@/components/QuoteBand";
import { pageMetadata } from "@/lib/seo";
import { warehouseInfo } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/warehouse",
  title: "倉庫與包裝｜大件收貨規範與木架加固",
  description:
    "海兔集運大件倉收貨規範與包裝方式：收件人填寫方式、超大超重件預約卸貨、到倉拍照，以及氣泡護角、木架加固與原箱加強的選擇。",
});

export default function WarehousePage() {
  const address = [warehouseInfo.province, warehouseInfo.city, warehouseInfo.district, warehouseInfo.detail]
    .filter(Boolean)
    .join("");

  return (
    <>
      <PageIntro
        label="倉庫與包裝"
        title="大件到倉後，我們會先做這些事"
        lead="確認收貨、拍照驗貨、選擇包裝，再安排裝櫃。倉庫地址請向客服索取，並附上您的專屬編號。"
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:px-6 lg:grid-cols-2">
        <div className="card rounded-2xl p-6 md:p-8">
          <h2 className="heading text-xl text-char-950">{warehouseInfo.name}</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="text-ink-soft">收件人寫法</dt>
              <dd className="heading mt-1 text-lg text-ember-600">{warehouseInfo.receiverHint}</dd>
            </div>
            <div>
              <dt className="text-ink-soft">倉庫地址</dt>
              <dd className="mt-1 text-char-950">{address || "確認報價後由客服提供"}</dd>
            </div>
            {warehouseInfo.phone ? (
              <div>
                <dt className="text-ink-soft">倉庫電話</dt>
                <dd className="mt-1 text-char-950">{warehouseInfo.phone}</dd>
              </div>
            ) : null}
          </dl>
        </div>

        <div>
          <h2 className="heading ember-bar text-xl text-char-950">收貨規範</h2>
          <ol className="mt-5 space-y-4">
            {warehouseInfo.rules.map((rule, index) => (
              <li key={rule} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span className="heading text-ember-500">{index + 1}.</span>
                {rule}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-sand-100">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="heading ember-bar text-xl text-char-950 md:text-2xl">三種包裝方式</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {warehouseInfo.packing.map((pack) => (
              <article key={pack.title} className="card rounded-2xl p-6">
                <h3 className="heading text-lg text-char-950">{pack.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pack.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuoteBand title="不知道該選哪種包裝？" text="傳照片給客服，我們依材質與尺寸建議最合適的包法。" />
    </>
  );
}
