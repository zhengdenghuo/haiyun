import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { guideSections } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/guide",
  title: "集運須知｜違禁品、清關與打包說明",
  description:
    "集運下單前準備、打包建議、清關與稅費說明，以及違禁品與限制品清單（鋰電池、液體、粉末等），避免包裹無法出庫或延誤清關。",
});

export default function GuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Guide"
        title="集運須知：違禁品、清關與打包說明"
        description="下單、打包、清關與違禁說明集中在此。首次集運建議通讀違禁品一節，避免無法出庫。"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="mb-10 flex flex-wrap gap-3">
          {guideSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-md border border-mist-200 bg-white px-3 py-1.5 text-sm text-ocean-800 transition hover:border-sea-300"
            >
              {section.title}
            </a>
          ))}
        </div>

        <div className="space-y-14">
          {guideSections.map((section) => (
            <article key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="font-display text-3xl text-ocean-900">{section.title}</h2>
              <ul className="mt-5 max-w-3xl space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="text-ink-muted leading-relaxed">
                    · {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="仍有不確定的品類？"
        description="把商品鏈接或成分說明發給客服，我們會在工作時間內回覆是否可運。"
      />
    </>
  );
}
