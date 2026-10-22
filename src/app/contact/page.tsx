import type { Metadata } from "next";
import Image from "next/image";
import { LineAddFriendButton } from "@/components/LineAddFriendButton";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: "聯絡我們｜大件寄台灣免費估價",
  description: "海兔集運聯絡方式與淘寶店入口整理。可直接前往淘寶店查看商品，也能透過 LINE 聯繫客服詢問大件寄台灣報價。",
});

export default function ContactPage() {
  const channels = [
    site.phone && { label: "電話", value: site.phone, href: `tel:${site.phone}` },
    site.line && { label: "LINE", value: "加入 LINE 好友", href: site.line },
    site.wechat && { label: "微信", value: site.wechat },
    site.email && { label: "Email", value: site.email, href: `mailto:${site.email}` },
  ].filter(Boolean) as { label: string; value: string; href?: string }[];

  return (
    <>
      <PageIntro
        label="聯絡我們"
        title="先看淘寶店，再聯繫客服"
        lead="想直接逛商品或下單，可以先進淘寶店；需要確認運費、包裝或送貨條件，再用 LINE 聯繫我們。"
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="card rounded-3xl p-6 md:p-8">
          <div className="rounded-3xl bg-char-900 p-6 text-sand-100 md:p-8">
            <p className="text-sm font-semibold text-ember-400">淘寶店入口</p>
            <h2 className="heading mt-3 text-2xl text-white md:text-3xl">先逛店鋪，再決定怎麼寄</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-sand-300">
              這裡整理了海兔的淘寶店地址，想先看商品、服務內容或直接下單，都可以從這裡進入。
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-sand-300">淘寶店地址</p>
              <a
                href={site.taobaoShop}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block break-all text-base font-semibold text-white hover:text-ember-400"
              >
                {site.taobaoShop}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.taobaoShop}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-ember-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ember-600"
              >
                前往淘寶店
              </a>
              <a
                href={site.line}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LINE 詢問運費
              </a>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-sand-100 p-5">
              <h3 className="heading text-base text-char-950">適合先進淘寶店的情況</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                <li>想先看店內服務與商品內容</li>
                <li>已經準備直接下單或詢價</li>
                <li>想先確認品項是否能寄台灣</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-sand-100 p-5">
              <h3 className="heading text-base text-char-950">聯繫客服前建議準備</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                <li>商品連結或照片</li>
                <li>包裝後的長、寬、高與重量</li>
                <li>送貨地區、樓層與是否有電梯</li>
              </ul>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-char-900 p-6 text-sand-100 md:p-8">
            <h2 className="heading text-lg text-white">客服資訊</h2>
            {channels.length ? (
              <dl className="mt-4 space-y-3 text-sm">
                {channels.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <dt className="w-14 shrink-0 text-sand-300">{item.label}</dt>
                    <dd>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold text-white hover:text-ember-400"
                          {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-semibold text-white">{item.value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-sand-300">
                電話與 LINE 客服即將開通，目前請先透過左側表單留言，我們會盡快回覆。
              </p>
            )}
            <p className="mt-5 border-t border-white/10 pt-4 text-xs text-sand-300">服務時間：{site.hours}</p>
            <div className="mt-4">
              <p className="mb-2 text-xs text-sand-300">LINE 加好友</p>
              <LineAddFriendButton href={site.line} />
            </div>
            {site.lineQr ? (
              <Image
                src={site.lineQr}
                alt="LINE 客服 QR Code"
                width={150}
                height={150}
                className="mt-5 rounded-xl bg-white p-2"
              />
            ) : null}
          </div>

          <div className="card rounded-3xl p-6">
            <h2 className="heading text-lg text-char-950">估價時請提供</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-soft">
              <li>商品連結或照片</li>
              <li>包裝後的長、寬、高、重量與件數</li>
              <li>送貨地區、樓層與有無電梯</li>
              <li>是否需要組裝或木架</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
