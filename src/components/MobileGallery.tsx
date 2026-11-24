"use client";

import { useId, useState, type ReactNode } from "react";

type MobileGalleryProps = {
  children: ReactNode;
  className: string;
  previewCount: 4 | 6;
  moreLabel: string;
  lessLabel: string;
  dark?: boolean;
};

export function MobileGallery({
  children,
  className,
  previewCount,
  moreLabel,
  lessLabel,
  dark = false,
}: MobileGalleryProps) {
  const galleryId = useId();
  const [expanded, setExpanded] = useState(false);
  const previewClass = previewCount === 4
    ? "max-md:[&>li:nth-child(n+5)]:hidden"
    : "max-md:[&>li:nth-child(n+7)]:hidden";
  const buttonClass = dark
    ? "border-white/30 text-white hover:bg-white/10"
    : "border-sand-300 text-char-950 hover:bg-sand-100";

  return (
    <>
      <ul id={galleryId} className={`${className} ${expanded ? "" : previewClass}`}>
        {children}
      </ul>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={galleryId}
        onClick={() => setExpanded((current) => !current)}
        className={`mt-4 flex min-h-11 w-full items-center justify-center rounded-xl border px-4 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember-500 md:hidden ${buttonClass}`}
      >
        {expanded ? lessLabel : moreLabel}
      </button>
    </>
  );
}
