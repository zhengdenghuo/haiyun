import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "頁面不存在",
};

const shortcuts = [
  { href: "/", label: "首頁" },
  { href: "/services", label: "大件服務" },
  { href: "/estimate", label: "才數試算" },
  { href: "/articles", label: "大件知識" },
  { href: "/contact", label: "免費估價" },
];

export default function NotFound() {
  return (
    <section className="grid-paper">
      <div className="mx-auto max-w-3xl px-4 py-24 md:px-6">
        <p className="heading text-7xl text-ember-500">404</p>
        <h1 className="heading mt-4 text-3xl text-char-950">這個頁面不存在</h1>
        <p className="mt-3 text-ink-soft">網址可能有誤或已移除，可以從下面的入口繼續。</p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {shortcuts.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-block rounded-full border-2 border-char-900 px-4 py-2 text-sm font-semibold text-char-900 hover:bg-char-900 hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
