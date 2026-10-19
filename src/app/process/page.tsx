import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/process",
  title: "集運流程｜大陸寄台灣六步驟",
  description:
    "大陸集運到台灣只要六步：與客服溝通、購物寄倉、包裹預報、合箱打包、付款發運、簽收確認。第一次使用淘寶、拼多多集運也能輕鬆上手。",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="集運流程"
        description="從溝通到簽收共六步。首次使用建議先向客服確認線路，並了解體積重計費規則。"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <ol className="space-y-0">
          {processSteps.map((step, index) => (
            <li
              key={step.step}
              className="grid gap-4 border-l border-mist-200 py-8 pl-6 md:grid-cols-[100px_1fr] md:pl-10"
            >
              <div className="relative">
                <span className="absolute -left-[2.05rem] top-1.5 h-3 w-3 rounded-full bg-sea-400 md:-left-[2.95rem]" />
                <p className="font-display text-3xl text-ocean-800">{step.step}</p>
              </div>
              <div>
                <h2 className="text-xl font-medium text-ocean-900 md:text-2xl">{step.title}</h2>
                <p className="mt-2 max-w-2xl text-ink-muted leading-relaxed">{step.desc}</p>
                {index === 0 ? (
                  <p className="mt-3 text-sm text-sea-500">
                    提示：取得倉庫地址後，請向客服確認收件人中是否已含您的專屬編號。
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-mist-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="font-display text-3xl text-ocean-900">常見卡點與處理</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              [
                "包裹長時間未入庫",
                "核對快遞是否已簽收、收件人是否含專屬編號；仍無記錄可提交運單號由客服協查。",
              ],
              [
                "體積重高於預期",
                "鞋盒、燈具等空隙大的貨物建議去盒或加固壓縮；可先用運費估算工具粗算。",
              ],
              [
                "清關查驗",
                "如實申報品名、數量與貨值；包稅線路依實際貨值申報，稅費由我們代為繳納，特殊品類以客服通知為準。",
              ],
            ].map(([title, body]) => (
              <article key={title}>
                <h3 className="text-lg font-medium text-ocean-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted">
            更多細節見{" "}
            <Link href="/guide" className="text-sea-500 hover:underline">
              集運須知
            </Link>{" "}
            與{" "}
            <Link href="/pricing" className="text-sea-500 hover:underline">
              收費標準
            </Link>
            。
          </p>
        </div>
      </section>

      <CtaBanner
        title="按流程走，第一票也能順暢"
        description="先獲取倉庫地址，或直接諮詢客服確認貨物是否可運。"
        primaryHref="/warehouse"
        primaryLabel="查看收貨倉庫"
      />
    </>
  );
}
