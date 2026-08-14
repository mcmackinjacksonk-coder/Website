/**
 * Service Signals — Clover Junk Removal
 * Design: Fresh & Grounded | Truthful, non-statistical operating details with clover accents and an airy whitespace rhythm.
 */
import { ClipboardCheck, MapPin, Sparkles } from "lucide-react";

const signals = [
  { icon: MapPin, title: "Clover, South Carolina", copy: "Service requests begin with your address and job details." },
  { icon: ClipboardCheck, title: "Structured booking", copy: "Choose a service, share access notes, and send your request." },
  { icon: Sparkles, title: "Priority option", copy: "Request priority service with a clearly disclosed +$50 option." },
];

export default function Stats() {
  return (
    <section className="relative z-10 -mt-8 bg-[#f9f7f4] pb-16 pt-4 sm:-mt-12 sm:pb-20 sm:pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[1.75rem] border border-[#e3eee6] bg-white shadow-[0_18px_48px_rgba(13,43,24,0.06)] md:grid-cols-3">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <article key={signal.title} className={`flex gap-4 p-6 sm:p-8 ${index < signals.length - 1 ? "border-b border-[#e8f0ea] md:border-b-0 md:border-r" : ""}`}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8f5ed] text-[#1a7a3c]"><Icon size={20} /></div>
                <div>
                  <h2 className="text-base font-bold text-[#1c2b1e]" style={{ fontFamily: "'Playfair Display', serif" }}>{signal.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{signal.copy}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
