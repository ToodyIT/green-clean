import type { CSSProperties } from "react";
import { twJoin } from "tailwind-merge";

type SectionBackgroundVariant = "light" | "lightSm" | "dark" | "cta";

const BLOBS: Record<
  SectionBackgroundVariant,
  Array<{ className: string; style?: CSSProperties }>
> = {
  light: [
    { className: "absolute top-20 left-10 h-72 w-72 rounded-full bg-green-300/25" },
    {
      className: "absolute top-40 right-10 h-72 w-72 rounded-full bg-orange-400/20",
    },
    {
      className: "absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-amber-200/20",
    },
  ],
  lightSm: [
    { className: "absolute top-20 left-10 h-64 w-64 rounded-full bg-green-200/30" },
    {
      className: "absolute bottom-20 right-10 h-64 w-64 rounded-full bg-orange-300/15",
    },
  ],
  dark: [
    { className: "absolute top-0 right-1/4 h-80 w-80 rounded-full bg-green-900/25" },
    {
      className: "absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-emerald-900/20",
    },
    {
      className: "absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-800/15",
    },
  ],
  cta: [
    { className: "absolute top-10 left-1/4 h-80 w-80 rounded-full bg-white/10" },
    {
      className: "absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-orange-300/15",
    },
  ],
};

/** Lightweight static section backgrounds (no blur, blend modes, or infinite animation). */
export function SectionBackground({
  variant = "light",
  className,
}: {
  variant?: SectionBackgroundVariant;
  className?: string;
}) {
  return (
    <div
      className={twJoin("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {BLOBS[variant].map((blob, i) => (
        <div key={i} className={blob.className} style={blob.style} />
      ))}
    </div>
  );
}
