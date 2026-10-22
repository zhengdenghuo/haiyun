import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/articles",
  title: "集運知識｜運費、違禁品、清關與實名認證教學",
  description:
    "台灣集運常見問題一次看懂：淘寶集運教學、運費與材積重怎麼算、違禁品清單、海運空運比較、稅費與 EZ WAY 實名認證說明。",
});

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge"
        title="集運知識：運費、違禁品、清關與實名認證"
        description="整理台灣客戶最常問的集運問題，從下單、運費到清關，寄之前先看一看。"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <ul className="grid gap-5 md:grid-cols-2">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="soft-panel group flex h-full flex-col rounded-2xl p-6 transition hover:-translate-y-0.5"
              >
                <time dateTime={article.publishedAt} className="text-xs text-ink-muted">
                  {article.publishedAt}
                </time>
                <h2 className="mt-2 font-display text-xl leading-snug text-ocean-900 group-hover:text-sea-500 md:text-2xl">
                  {article.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{article.excerpt}</p>
                <span className="mt-4 text-sm font-medium text-sea-500">閱讀全文 →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBanner
        title="找不到你想問的？"
        description="把商品連結、重量尺寸或目的地發給客服，我們會直接幫你評估。"
      />
    </>
  );
}
