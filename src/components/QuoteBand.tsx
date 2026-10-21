import Link from "next/link";

type QuoteBandProps = {
  title: string;
  text: string;
  actionHref?: string;
  actionLabel?: string;
};

export function QuoteBand({
  title,
  text,
  actionHref = "/contact",
  actionLabel = "傳尺寸，免費估價",
}: QuoteBandProps) {
  return (
    <section className="bg-ember-500 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="max-w-2xl">
          <h2 className="heading text-2xl md:text-3xl">{title}</h2>
          <p className="mt-2 text-white/85">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={actionHref}
            className="rounded-full bg-char-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-char-800"
          >
            {actionLabel}
          </Link>
          <Link
            href="/estimate"
            className="rounded-full border-2 border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            才數試算
          </Link>
        </div>
      </div>
    </section>
  );
}
