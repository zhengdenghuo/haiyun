import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { QuoteBand } from "@/components/QuoteBand";
import { pageMetadata } from "@/lib/seo";
import { guideSections } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/guide",
  title: "寄送須知｜大件尺寸量測、包裝與送貨到府",
  description:
    "寄大件到台灣前必看：包裝尺寸怎麼量、易碎家具包裝要求、送貨到府前要確認的電梯與巷弄、清關申報原則，以及不收寄的品項。",
});

export default function GuidePage() {
  return (
    <>
      <PageIntro
        label="寄送須知"
        title="寄大件之前，先確認這五件事"
        lead="尺寸量對、包裝選對、送貨條件說清楚，就能避免大部分的加價與延誤。"
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-[220px_1fr]">
        <nav aria-label="本頁目錄" className="lg:sticky lg:top-32 lg:self-start">
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {guideSections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-sand-100 hover:text-ember-600"
                >
                  {index + 1}. {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-6">
          {guideSections.map((section, index) => (
            <section key={section.id} id={section.id} className="card scroll-mt-32 rounded-2xl p-6 md:p-8">
              <h2 className="heading text-xl text-char-950 md:text-2xl">
                <span className="text-ember-500">{index + 1}.</span> {section.title}
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-ink-soft">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <QuoteBand title="還有不確定的地方？" text="把商品連結或照片傳給客服，寄之前就能確認能不能收、怎麼包。" />
    </>
  );
}
