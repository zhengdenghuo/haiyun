import Link from "next/link";
import { footerLinks, site } from "@/lib/site";

export function Footer() {
  const contacts = [
    site.phone && { label: "電話", value: site.phone, href: `tel:${site.phone}` },
    site.line && { label: "LINE", value: "加入好友", href: site.line },
    site.email && { label: "Email", value: site.email, href: `mailto:${site.email}` },
  ].filter(Boolean) as { label: string; value: string; href: string }[];

  return (
    <footer className="mt-auto border-t-4 border-ember-500 bg-char-950 text-sand-200">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <p className="heading text-2xl text-white">{site.name}</p>
            <p className="mt-2 text-sm text-sand-300">{site.tagline}</p>
            {contacts.length ? (
              <dl className="mt-5 space-y-1.5 text-sm">
                {contacts.map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <dt className="w-12 text-sand-300">{item.label}</dt>
                    <dd>
                      <a href={item.href} className="text-white hover:text-ember-400">
                        {item.value}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-full bg-ember-500 px-4 py-2 text-sm font-semibold text-white hover:bg-ember-600"
              >
                線上留言估價
              </Link>
            )}
            <p className="mt-3 text-xs text-sand-300">服務時間：{site.hours}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterColumn title="服務" links={footerLinks.services} />
            <FooterColumn title="寄送資訊" links={footerLinks.support} />
            <FooterColumn title="關於" links={footerLinks.company} />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-sand-300 md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © 2026 {site.name}（{site.englishName}）
          </p>
          {site.icp ? (
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
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
      <p className="text-xs font-semibold tracking-widest text-ember-400">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link href={link.href} className="text-sm text-sand-200 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
