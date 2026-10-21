"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur">
      <div className="bg-char-900 text-xs text-sand-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 md:px-6">
          <p>家具・家電・建材・搬家｜大件專線寄台灣</p>
          <p className="hidden sm:block">{site.hours}</p>
        </div>
      </div>

      <div className="border-b border-sand-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ember-500 text-lg font-bold text-white">
              兔
            </span>
            <span className="heading text-xl text-char-950">{site.name}</span>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 px-2.5 py-2 text-sm transition ${
                  isActive(item.href)
                    ? "border-ember-500 font-semibold text-char-950"
                    : "border-transparent text-ink-soft hover:text-char-950"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-full bg-ember-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-ember-600 sm:inline-flex"
            >
              免費估價
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 text-char-900 xl:hidden"
              aria-expanded={open}
              aria-label="開啟選單"
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="border-b border-sand-200 bg-paper xl:hidden">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-4 py-3 sm:grid-cols-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm ${
                  isActive(item.href) ? "bg-ember-100 font-semibold text-ember-600" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
