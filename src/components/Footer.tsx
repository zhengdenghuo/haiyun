import Link from "next/link";
import { footerLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-ocean-950 text-foam">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <p className="font-display text-2xl tracking-wide">{site.name}</p>
          <p className="mt-2 text-sm text-foam/65">{site.tagline}</p>
          <p className="mt-4 text-sm text-foam/55">
            諮詢熱線{" "}
            <a href={`tel:${site.phone}`} className="text-sea-300 hover:underline">
              {site.phone}
            </a>
          </p>
          <p className="mt-1 text-xs text-foam/45">{site.hours}</p>
        </div>

        <FooterColumn title="集運服務" links={footerLinks.services} />
        <FooterColumn title="幫助支持" links={footerLinks.support} />
        <FooterColumn title="公司信息" links={footerLinks.company} />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-foam/45 md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © 2026 {site.name} · {site.englishName}
          </p>
          {site.icp ? (
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foam/70"
            >
              {site.icp}
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-medium tracking-wide text-sea-300">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link href={link.href} className="text-sm text-foam/70 transition hover:text-foam">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
