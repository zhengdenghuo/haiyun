import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";
import { QuoteBand } from "@/components/QuoteBand";
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
          { "@type": "ListItem", position: 2, name: "大件知識", item: `${site.url}/articles/` },
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
      <PageIntro
        label="本文"
        title={article.title}
        lead={article.excerpt}
        crumbs={[{ href: "/articles", label: "大件知識" }]}
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:px-6 lg:grid-cols-[1fr_280px]">
        <article>
          <time dateTime={article.publishedAt} className="text-xs text-ink-soft">
            發布日期：{article.publishedAt}
          </time>
          <div className="mt-6 space-y-10">
            {article.sections.map((section) => {
              const List = section.ordered ? "ol" : "ul";
              return (
                <section key={section.heading}>
                  <h2 className="heading ember-bar text-xl text-char-950 md:text-2xl">{section.heading}</h2>
                  {section.paragraphs?.map((text) => (
                    <p key={text} className="mt-4 leading-loose text-ink">
                      {text}
                    </p>
                  ))}
                  {section.list ? (
                    <List
                      className={`mt-4 space-y-2.5 pl-5 leading-relaxed text-ink ${
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
        </article>

        <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <div className="card rounded-2xl p-5">
            <h2 className="text-sm font-semibold text-ember-600">相關頁面</h2>
            <ul className="mt-3 space-y-2">
              {article.related.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-char-950 hover:text-ember-600">
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="card rounded-2xl p-5">
            <h2 className="text-sm font-semibold text-ember-600">其他文章</h2>
            <ul className="mt-3 space-y-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link href={`/articles/${item.slug}`} className="text-sm leading-snug text-char-950 hover:text-ember-600">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <QuoteBand title="看完還是不確定？" text="把你的品項和尺寸傳給客服，直接幫你算、幫你規劃。" />
    </>
  );
}
