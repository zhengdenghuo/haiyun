export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

type EventParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * 发送 GA4 自定义事件。gtag.js 尚未加载时先写入 dataLayer 排队，加载后会被自动处理。
 */
export function trackEvent(event: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
    return;
  }
  window.dataLayer.push(["event", event, params]);
}
