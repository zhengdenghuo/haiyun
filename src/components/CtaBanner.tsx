import Link from "next/link";

type CtaBannerProps = {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBanner({
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "聯繫客服",
  secondaryHref = "/estimate",
  secondaryLabel = "估算運費",
}: CtaBannerProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <div className="relative overflow-hidden rounded-2xl bg-ocean-900 px-6 py-10 text-foam md:px-12 md:py-12">
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-sea-400/20 blur-2xl"
          aria-hidden
        />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl tracking-wide md:text-4xl">{title}</h2>
          <p className="mt-3 text-foam/70">{description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="rounded-md bg-sea-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sea-400"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="rounded-md border border-white/25 px-5 py-2.5 text-sm text-foam transition hover:bg-white/5"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
