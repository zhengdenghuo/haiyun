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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ocean-950/90 text-foam backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-wide text-foam transition group-hover:text-sea-300 md:text-2xl">
            {site.name}
          </span>
          <span className="hidden text-[11px] tracking-[0.18em] text-sea-300/80 uppercase sm:inline">
            Ocean
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-2 py-1.5 text-sm transition ${
                  active
                    ? "bg-white/10 text-sea-300"
                    : "text-foam/80 hover:bg-white/5 hover:text-foam"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-md bg-sea-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-sea-400 sm:inline-flex"
          >
            立即諮詢
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-foam lg:hidden"
            aria-expanded={open}
            aria-label="打開導航菜單"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">菜單</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ocean-900 lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm ${
                  isActive(item.href) ? "bg-white/10 text-sea-300" : "text-foam/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/estimate"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-sea-500 px-3 py-2.5 text-center text-sm font-medium text-white"
            >
              運費估算
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
