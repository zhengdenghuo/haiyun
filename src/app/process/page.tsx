import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "集运流程",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="集运流程"
        description="从注册到签收共六步。建议首次使用时先完成预报与合箱演示，熟悉体积重计费规则。"
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
                    提示：注册后请尽快在个人中心核对仓库地址是否含会员号。
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-mist-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="font-display text-3xl text-ocean-900">常见卡点与处理</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              [
                "包裹长时间未入库",
                "核对快递是否已签收、收件人是否含会员号；仍无记录可提交运单号由客服协查。",
              ],
              [
                "体积重高于预期",
                "鞋盒、灯具等空隙大的货物建议去盒或加固压缩；可先用运费估算工具粗算。",
              ],
              [
                "清关查验",
                "如实申报品名与数量；包税线路由专线处理常规税费，特殊品类以客服通知为准。",
              ],
            ].map(([title, body]) => (
              <article key={title}>
                <h3 className="text-lg font-medium text-ocean-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted">
            更多细节见{" "}
            <Link href="/guide" className="text-sea-500 hover:underline">
              集运须知
            </Link>{" "}
            与{" "}
            <Link href="/pricing" className="text-sea-500 hover:underline">
              收费标准
            </Link>
            。
          </p>
        </div>
      </section>

      <CtaBanner
        title="按流程走，第一票也能顺畅"
        description="先获取仓库地址，或直接咨询客服确认货物是否可运。"
        primaryHref="/warehouse"
        primaryLabel="查看收货仓库"
      />
    </>
  );
}
