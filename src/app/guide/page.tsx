import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { guideSections } from "@/lib/site";

export const metadata: Metadata = {
  title: "集运须知",
};

export default function GuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Guide"
        title="集运须知"
        description="下单、打包、清关与违禁说明集中在此。首次集运建议通读违禁品一节，避免无法出库。"
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
        title="仍有不确定的品类？"
        description="把商品链接或成分说明发给客服，我们会在工作时间内回复是否可运。"
      />
    </>
  );
}
