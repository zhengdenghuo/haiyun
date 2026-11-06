import { site } from "@/lib/site";

export function FloatingLineButton() {
  if (!site.line) return null;

  return (
    <a
      href={site.line}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="添加 LINE"
      data-button-name="添加 LINE"
      className="line-float fixed right-4 bottom-4 z-[70] flex items-center gap-1.5 rounded-full bg-[#06C755] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#05b34c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06C755] md:right-6 md:bottom-6 md:gap-2 md:px-4 md:py-2.5 md:text-sm"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current md:h-5 md:w-5">
        <path d="M20.5 10.4c0-4.2-3.8-7.6-8.5-7.6s-8.5 3.4-8.5 7.6c0 3.8 3.4 7 7.9 7.5.3.1.7.2.8.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1.2 1.1.7 1.3-.5 6.8-4 7.3-6.9.3-1.2 0-2.2 0-3.7Z" />
      </svg>
      <span>添加 LINE</span>
    </a>
  );
}
