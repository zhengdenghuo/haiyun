import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "找不到頁面",
};

const shortcuts = [
  { href: "/", label: "回到首頁" },
  { href: "/services", label: "集運服務" },
  { href: "/pricing", label: "收費標準" },
  { href: "/articles", label: "集運知識" },
  { href: "/contact", label: "聯繫客服" },
];

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center md:px-6">
      <p className="font-display text-6xl text-sea-400">404</p>
      <h1 className="mt-4 font-display text-3xl text-ocean-900 md:text-4xl">找不到這個頁面</h1>
      <p className="mt-4 leading-relaxed text-ink-muted">
        網址可能已變更或輸入有誤。你可以從下方入口繼續瀏覽，或直接聯繫客服。
      </p>
      <ul className="mt-8 flex flex-wrap justify-center gap-3">
        {shortcuts.map((item) => (
          <li key={`shortcut-${item.label}`}>
            <Link
              href={item.href}
              className="inline-block rounded-md border border-mist-200 bg-white px-4 py-2 text-sm text-ocean-800 transition hover:border-sea-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
