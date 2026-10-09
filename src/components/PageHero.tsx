type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ocean-900 text-foam">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 0%, rgba(42,168,154,0.35), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        {eyebrow ? (
          <p className="animate-rise text-xs tracking-[0.22em] text-sea-300 uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="animate-rise-delay-1 mt-3 font-display text-4xl tracking-wide md:text-5xl">
          {title}
        </h1>
        <p className="animate-rise-delay-2 mt-4 max-w-2xl text-base leading-relaxed text-foam/75 md:text-lg">
          {description}
        </p>
      </div>
      <div className="wave-divider h-10 w-full bg-foam md:h-12" aria-hidden />
    </section>
  );
}
