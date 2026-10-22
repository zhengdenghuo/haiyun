import Link from "next/link";
import { getArticle, type Article } from "@/lib/articles";

type RelatedArticlesProps = {
  slugs: string[];
  title?: string;
  eyebrow?: string;
};

export function RelatedArticles({
  slugs,
  title = "相關文章",
  eyebrow = "Related",
}: RelatedArticlesProps) {
  const items = slugs
    .map((slug) => getArticle(slug))
    .filter((article): article is Article => Boolean(article));

  if (items.length === 0) {
    return null;
  }

  const gridCols = slugs.length <= 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      {eyebrow ? (
        <p className="text-xs tracking-[0.22em] text-sea-500 uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl text-ocean-900">{title}</h2>
      <ul className={`mt-8 grid gap-5 ${gridCols}`}>
        {items.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/articles/${article.slug}`}
              className="soft-panel group flex h-full flex-col rounded-2xl p-6 transition hover:-translate-y-0.5"
            >
              <h3 className="font-display text-xl leading-snug text-ocean-900 group-hover:text-sea-500">
                {article.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{article.excerpt}</p>
              <span className="mt-4 text-sm font-medium text-sea-500">閱讀全文 →</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
