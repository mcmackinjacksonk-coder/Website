/**
 * Shared Page Banner — Clover Junk Removal
 * Design: Fresh & Grounded | Deep clover green field, amber accent, oversized organic clover watermark.
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

function CloverMark() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" fill="currentColor" aria-hidden="true">
      <circle cx="70" cy="70" r="50" />
      <circle cx="130" cy="70" r="50" />
      <circle cx="70" cy="130" r="50" />
      <circle cx="130" cy="130" r="50" />
      <rect x="96" y="140" width="8" height="42" rx="4" />
    </svg>
  );
}

export default function PageBanner({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#0d2b18] pb-20 pt-32 text-white sm:pb-24 sm:pt-36">
      <div className="pointer-events-none absolute -right-16 -top-20 h-80 w-80 rotate-12 text-white/[0.055] sm:h-[28rem] sm:w-[28rem]">
        <CloverMark />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-[10%] h-24 w-24 text-[#f5a623]/15 sm:h-32 sm:w-32">
        <CloverMark />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f5a623]">
            {eyebrow}
          </p>
          <h1
            className="max-w-2xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
          {actionLabel && actionHref ? (
            <Link
              href={actionHref}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f5a623] px-6 py-3.5 text-sm font-bold text-[#1c2b1e] shadow-lg transition duration-200 hover:bg-[#e09510] active:scale-[0.97]"
            >
              {actionLabel}
              <ArrowRight size={16} />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
