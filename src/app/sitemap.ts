import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services/", priority: 0.9 },
  { path: "/pricing/", priority: 0.9 },
  { path: "/process/", priority: 0.8 },
  { path: "/warehouse/", priority: 0.8 },
  { path: "/estimate/", priority: 0.8 },
  { path: "/articles/", priority: 0.8 },
  { path: "/guide/", priority: 0.7 },
  { path: "/contact/", priority: 0.7 },
  { path: "/about/", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages: MetadataRoute.Sitemap = routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
  const posts: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${site.url}/articles/${article.slug}/`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...pages, ...posts];
}
