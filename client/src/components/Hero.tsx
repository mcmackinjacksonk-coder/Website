/**
 * Hero Section — Clover Junk Removal
 * Design: Asymmetric layout, hero image right, bold text left
 * Dark image background → white text with gradient overlay
 */
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/clover_hero_69e43807.jpg"
          alt="Clover Junk Removal team"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay — dark on left for text, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b18]/90 via-[#0d2b18]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b18]/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-[#f5a623]/20 border border-[#f5a623]/40 text-[#f5a623] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-base">🍀</span>
            Same-Day Service Available
          </div>

          {/* Headline */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Space,
            <br />
            <span className="text-[#f5a623]">Reclaimed.</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-lg transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Fast, affordable junk removal for homes and businesses. We haul it
            all — furniture, appliances, yard debris, and more. You point, we
            load, you relax.
          </p>

          {/* Trust bullets */}
          <ul
            className={`flex flex-col sm:flex-row gap-3 sm:gap-6 mb-10 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {["Licensed & Insured", "Upfront Pricing", "Eco-Friendly Disposal"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <CheckCircle2 size={16} className="text-[#f5a623] shrink-0" />
                  {item}
                </li>
              )
            )}
          </ul>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[400ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#f5a623] hover:bg-[#e09510] text-[#1c2b1e] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Book Free Pickup
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200"
            >
              See Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Bottom diagonal clip */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-[#f9f7f4]"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      />
    </section>
  );
}
