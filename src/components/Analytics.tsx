"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GA_ID, trackEvent } from "@/lib/analytics";

function buttonName(anchor: HTMLAnchorElement) {
  const named = anchor.dataset.buttonName?.trim();
  if (named) return named;
  const text = anchor.textContent?.replace(/\s+/g, " ").trim() ?? "";
  if (text && !/^https?:/i.test(text)) return text.slice(0, 80);
  const alt = anchor.querySelector("img")?.getAttribute("alt") ?? "";
  if (/add friend/i.test(alt)) return "添加好友";
  if (/taobao\.com/i.test(anchor.href)) return "前往淘寶";
  return text ? "淘寶店網址" : "未命名按鈕";
}

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_ID) return;
    trackEvent("page_view", { page_path: pathname });
  }, [pathname]);

  useEffect(() => {
    if (!GA_ID) return;

    function onClick(event: MouseEvent) {
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      const name = buttonName(anchor);
      const params = { button_name: name, link_url: href, page_path: pathname };

      if (/line\.me|lin\.ee/.test(href)) {
        trackEvent("click_line", params);
      } else if (/taobao\.com/i.test(href)) {
        trackEvent("click_taobao", params);
      } else if (pathname === "/" && href.startsWith("/")) {
        trackEvent("click_button", params);
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:false});`}
      </Script>
    </>
  );
}
