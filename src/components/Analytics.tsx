"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GA_ID, trackEvent } from "@/lib/analytics";

/**
 * GA4 统计。静态导出下站内跳转不会重新加载页面，
 * 因此关闭自动 page_view，改由路由变化后手动上报。
 * 同时在全局代理点击事件，捕获電話 / LINE / 淘寶店三个转化动作。
 */
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
      const href = anchor?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        trackEvent("click_phone", { page_path: pathname, phone: href.slice(4) });
      } else if (/lin\.ee|line\.me/.test(href)) {
        trackEvent("click_line", { page_path: pathname });
      } else if (/taobao\.com/.test(href)) {
        trackEvent("click_taobao", { page_path: pathname });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:false});`}
      </Script>
    </>
  );
}
