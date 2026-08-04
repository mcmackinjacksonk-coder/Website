/**
 * How It Works Section — Clover Junk Removal
 * Design: ASYMMETRIC — large clover badge left, steps stacked right on green bg
 * Clover motif: giant clover watermark, step numbers in clover-shaped badges
 */
import { useEffect, useRef, useState } from "react";
import { CalendarCheck, Truck, Smile, ArrowRight } from "lucide-react";

  const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Get Your Free Estimate",
    desc: "Call or fill out our form. We'll provide an upfront price with no obligation.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Schedule Your Pickup",
    desc: "Once you approve the estimate, we'll schedule a convenient time for your junk removal.",
  },
  {
    icon: Smile,
    step: "03",
    title: "We Remove Your Junk",
    desc: "Our crew arrives and removes your items. We handle all the heavy lifting and haul everything away responsibly.",
  },
];

function CloverSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="70" cy="70" r="50" />
      <circle cx="130" cy="70" r="50" />
      <circle cx="70" cy="130" r="50" />
      <circle cx="130" cy="130" r="50" />
      <rect x="96" y="140" width="8" height="40" rx="4" />
    </svg>
  );
}

export default function HowItWorks() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#1a7a3c] relative overflow-hidden">
      {/* Giant clover watermark */}
      <CloverSVG className="absolute -left-20 top-1/2 -translate-y-1/2 w-[32rem] h-[32rem] text-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Brand statement */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative inline-block mb-8">
              <CloverSVG className="w-32 h-32 text-[#f5a623]/30" />
              <span className="absolute inset-0 flex items-center justify-center text-[#f5a623] font-bold text-sm uppercase tracking-widest">
                Simple
              </span>
            </div>
            <span className="block text-[#f5a623] font-semibold text-sm uppercase tracking-widest mb-4">
              How It Works
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Three Steps to a Lighter Home
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              We've removed every barrier between you and a clutter-free space.
              No hidden fees. No heavy lifting. No stress.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#e09510] text-[#1c2b1e] font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 active:scale-95 shadow-lg"
            >
              Clear My Space
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right: Steps */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className={`flex items-start gap-5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 transition-all duration-700 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                {/* Step icon */}
                <div className="shrink-0 w-14 h-14 bg-[#f5a623]/20 border border-[#f5a623]/30 rounded-xl flex flex-col items-center justify-center">
                  <step.icon size={22} className="text-[#f5a623]" />
                  <span className="text-[#f5a623] text-[10px] font-bold mt-0.5">{step.step}</span>
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-white mb-1.5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
