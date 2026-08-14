/**
 * How It Works Section — Clover Junk Removal
 * Design: Fresh & Grounded | Asymmetric dark-green service path with oversized clover watermark and transparent confirmation language.
 */
import { CalendarCheck, ClipboardList, MessageCircle } from "lucide-react";
import { Link } from "wouter";

const steps = [
  { icon: ClipboardList, step: "01", title: "Send your request", desc: "Choose a service, add the address, and share what needs to be removed." },
  { icon: MessageCircle, step: "02", title: "Review the details", desc: "Clover reviews the request information and follows up to discuss the job." },
  { icon: CalendarCheck, step: "03", title: "Confirm the plan", desc: "Service details, timing, and any priority-service selection are confirmed directly with you." },
];

function CloverSVG({ className }: { className?: string }) {
  return <svg viewBox="0 0 200 200" className={className} fill="currentColor" aria-hidden="true"><circle cx="70" cy="70" r="50" /><circle cx="130" cy="70" r="50" /><circle cx="70" cy="130" r="50" /><circle cx="130" cy="130" r="50" /><rect x="96" y="140" width="8" height="40" rx="4" /></svg>;
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#1a7a3c] py-20 sm:py-28">
      <CloverSVG className="pointer-events-none absolute -left-20 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 text-white/[0.055]" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative mb-8 inline-block"><CloverSVG className="h-28 w-28 text-[#f5a623]/30" /><span className="absolute inset-0 flex items-center justify-center text-xs font-bold uppercase tracking-widest text-[#f5a623]">Clear</span></div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5a623]">How it works</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>A better path from request to confirmation.</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">The online form is built to start a useful conversation, not to make promises before the details are reviewed.</p>
          <Link href="/book" className="mt-8 inline-flex rounded-full bg-[#f5a623] px-6 py-3.5 text-sm font-bold text-[#1c2b1e] transition hover:bg-[#e09510] active:scale-[0.97]">Start a booking request</Link>
        </div>
        <div className="flex flex-col gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return <article key={step.step} className={`grid gap-5 rounded-[1.75rem] border border-white/15 bg-white/[0.08] p-6 backdrop-blur-sm sm:grid-cols-[4rem_1fr] sm:items-center sm:p-8 ${index === 1 ? "lg:ml-12" : ""}`}>
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-[#f5a623]/15 text-[#f5a623]"><Icon size={22} /><span className="mt-1 text-[10px] font-bold">{step.step}</span></div>
              <div><h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-white/70">{step.desc}</p></div>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}
