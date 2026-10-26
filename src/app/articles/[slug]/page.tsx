import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { articles, getArticle } from "@/lib/articles";
import { ogImage, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const base = pageMetadata({
    path: `/articles/${article.slug}`,
    title: article.title,
    description: article.description,
  });
  return {
    ...base,
    openGraph: { ...base.openGraph, type: "article", publishedTime: article.publishedAt },
  };
}

export default async function ArticlePage({ params }: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `${site.url}/articles/${article.slug}/`;
  const organization = {
    "@type": "Organization",
    name: site.name,
    url: `${site.url}/`,
    logo: `${site.url}/icon.png`,
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        image: `${site.url}${ogImage.url}`,
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        inLanguage: "zh-TW",
        mainEntityOfPage: url,
        author: organization,
        publisher: organization,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "首頁", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "集運知識", item: `${site.url}/articles/` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };
  const others = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PageHero eyebrow="Knowledge" title={article.title} description={article.excerpt} />

      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6">
        <nav className="text-sm text-ink-muted" aria-label="麵包屑">
          <Link href="/" className="hover:text-sea-500">
            首頁
          </Link>
          <span className="mx-2">/</span>
          <Link href="/articles" className="hover:text-sea-500">
            集運知識
          </Link>
        </nav>
        <time dateTime={article.publishedAt} className="mt-2 block text-xs text-ink-muted">
          發布日期：{article.publishedAt}
        </time>

        <div className="mt-10 space-y-12">
          {article.sections.map((section) => {
            const List = section.ordered ? "ol" : "ul";
            return (
              <section key={section.heading}>
                <h2 className="font-display text-2xl text-ocean-900 md:text-3xl">{section.heading}</h2>
                {section.paragraphs?.map((text) => (
                  <p key={text} className="mt-4 leading-relaxed text-ink-muted">
                    {text}
                  </p>
                ))}
                {section.list ? (
                  <List
                    className={`mt-4 space-y-3 pl-5 leading-relaxed text-ink-muted ${
                      section.ordered ? "list-decimal" : "list-disc"
                    }`}
                  >
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </List>
                ) : null}
              </section>
            );
          })}
        </div>

        <aside className="soft-panel mt-14 rounded-2xl p-6">
          <h2 className="text-lg font-medium text-ocean-900">延伸閱讀</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {article.related.map((link) => (
              <li key={`related-${link.label}`}>
                <Link
                  href={link.href}
                  className="inline-block rounded-md border border-mist-200 bg-white px-3 py-1.5 text-sm text-ocean-800 transition hover:border-sea-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <section className="mt-12">
          <h2 className="text-lg font-medium text-ocean-900">更多集運知識</h2>
          <ul className="mt-4 space-y-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/articles/${item.slug}`} className="text-sea-500 hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <CtaBanner
        title="還有其他問題？"
        description="把商品連結、重量尺寸或目的地發給客服，我們會直接幫你評估。"
      />
    </>
  );
}
