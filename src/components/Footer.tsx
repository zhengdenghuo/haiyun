import Link from "next/link";
import { LineAddFriendButton } from "@/components/LineAddFriendButton";
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
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.9fr_1fr] lg:items-start">
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
            <div className="mt-4">
              <LineAddFriendButton href={site.line} />
            </div>
            <p className="mt-3 text-xs text-sand-300">服務時間：{site.hours}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold tracking-widest text-ember-400">淘寶店</p>
            <h3 className="heading mt-3 text-xl text-white">直接進店看商品與服務</h3>
            <p className="mt-2 text-sm leading-relaxed text-sand-300">
              想先逛店鋪、看服務內容或直接下單，可以從這裡進入淘寶店。
            </p>
            <a
              href={site.taobaoShop}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block break-all text-sm font-semibold text-white hover:text-ember-400"
            >
              {site.taobaoShop}
            </a>
            <a
              href={site.taobaoShop}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-ember-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ember-600"
            >
              前往淘寶店
            </a>
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
