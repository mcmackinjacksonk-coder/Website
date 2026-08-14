/**
 * Not Found Page — Clover Junk Removal
 * Design: Fresh & Grounded | Branded dark-green recovery screen with clover geometry and clear next actions.
 */
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Link } from "wouter";
import BrandLockup from "../components/BrandLockup";

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

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#0d2b18] px-4 py-12 text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="pointer-events-none absolute -left-24 -top-20 h-80 w-80 rotate-[-18deg] text-white/[0.055] sm:h-[32rem] sm:w-[32rem]"><CloverMark /></div>
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rotate-12 text-[#f5a623]/10 sm:h-[30rem] sm:w-[30rem]"><CloverMark /></div>
      <section className="relative mx-auto w-full max-w-3xl text-center">
        <div className="mx-auto w-fit"><BrandLockup inverse /></div>
        <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-[#f5a623]">Wrong turn</p>
        <p className="mt-3 text-[6rem] font-bold leading-none text-white/10 sm:text-[9rem]" style={{ fontFamily: "'Playfair Display', serif" }}>404</p>
        <h1 className="-mt-10 text-4xl font-bold leading-tight sm:-mt-14 sm:text-6xl" style={{ fontFamily: "'Playfair Display', serif" }}>This page has been cleared out.</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">The link may be old, or the page may have moved. Head back to Clover Junk Removal and start again from a page that is still here.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5a623] px-6 py-3.5 text-sm font-bold text-[#1c2b1e] transition hover:bg-[#e09510] active:scale-[0.97]"><ArrowLeft size={16} /> Back Home</Link>
          <Link href="/book" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">Book a Pickup <ArrowRight size={16} /></Link>
        </div>
        <a href="tel:+19103088190" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#f5a623] transition hover:text-white"><Phone size={15} /> (910) 308-8190</a>
      </section>
    </main>
  );
}
