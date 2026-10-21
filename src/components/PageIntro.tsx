import Link from "next/link";

type PageIntroProps = {
  label: string;
  title: string;
  lead: string;
  crumbs?: { href: string; label: string }[];
};

export function PageIntro({ label, title, lead, crumbs = [] }: PageIntroProps) {
  return (
    <section className="grid-paper border-b border-sand-200">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <nav aria-label="目前位置" className="text-xs text-ink-soft">
          <Link href="/" className="hover:text-ember-600">
            首頁
          </Link>
          {crumbs.map((crumb) => (
            <span key={crumb.href}>
              <span className="mx-1.5">›</span>
              <Link href={crumb.href} className="hover:text-ember-600">
                {crumb.label}
              </Link>
            </span>
          ))}
          <span className="mx-1.5">›</span>
          <span className="text-ink">{label}</span>
        </nav>
        <h1 className="heading mt-5 max-w-3xl text-3xl leading-tight text-char-950 md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">{lead}</p>
      </div>
    </section>
  );
}
