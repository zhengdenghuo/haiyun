import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { QuoteBand } from "@/components/QuoteBand";
import { articles } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/articles",
  title: "大件知識｜家具家電寄台灣運費、包裝與送貨教學",
  description:
    "寄大件到台灣前必讀：家具運費與才數怎麼算、木架包裝怎麼選、冰箱洗衣機海運注意事項、整櫃併櫃比較，以及送貨到府的確認重點。",
});

export default function ArticlesPage() {
  return (
    <>
      <PageIntro
        label="大件知識"
        title="寄大件之前，先讀這幾篇"
        lead="整理家具、家電、建材寄台灣最常遇到的問題：怎麼算、怎麼包、怎麼送。"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="card group flex h-full flex-col rounded-3xl p-6 transition hover:border-ember-400"
              >
                <span className="heading text-4xl text-sand-300">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="heading mt-3 text-lg leading-snug text-char-950 group-hover:text-ember-600">
                  {article.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{article.excerpt}</p>
                <time dateTime={article.publishedAt} className="mt-4 text-xs text-ink-soft">
                  {article.publishedAt}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <QuoteBand title="想直接問我們？" text="把商品連結、尺寸與送貨地區傳給客服，比看文章更快拿到答案。" />
    </>
  );
}
