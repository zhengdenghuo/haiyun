export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

type EventParams = Record<string, string>;

export function trackEvent(name: string, params: EventParams = {}) {
  if (!GA_ID || typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer?.push(arguments);
    };
  window.gtag("event", name, params);
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
