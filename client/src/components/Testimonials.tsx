/**
 * Trust & Reviews Section — Clover Junk Removal
 * Design: Placeholder for real customer reviews (Google, Yelp, etc.)
 * Clover motif: large decorative clover behind the section header
 */
import { useEffect, useRef, useState } from "react";
import { Star, ExternalLink } from "lucide-react";

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

export default function Testimonials() {
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

  const trustPlatforms = [
    { name: "Google Reviews", icon: "🔍", href: "#" },
    { name: "Yelp", icon: "⭐", href: "#" },
    { name: "Trustpilot", icon: "✓", href: "#" },
    { name: "Facebook", icon: "f", href: "#" },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#e8f5ed] relative overflow-hidden">
      {/* Large decorative clover */}
      <CloverSVG className="absolute -right-24 bottom-0 w-96 h-96 text-[#1a7a3c]/8 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetric: left-anchored header */}
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-xl">
            <span className="inline-block text-[#1a7a3c] font-semibold text-sm uppercase tracking-widest mb-3">
              Trusted & Verified
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1c2b1e] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              See What Real Customers Say
              <span className="block text-[#1a7a3c]">About Clover.</span>
            </h2>
          </div>
        </div>

        {/* Trust platforms */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {trustPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              className="bg-white rounded-2xl p-7 shadow-sm border border-[#d4eedd] flex flex-col items-center text-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl">{platform.icon}</div>
              <h3 className="font-semibold text-[#1c2b1e] text-base">{platform.name}</h3>
              <div className="flex items-center gap-1 text-[#f5a623]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#f5a623]" />
                ))}
              </div>
              <p className="text-gray-500 text-xs">Read our verified reviews</p>
              <ExternalLink size={16} className="text-[#1a7a3c] opacity-50" />
            </a>
          ))}
        </div>

        {/* CTA to leave review */}
        <div
          className={`bg-white rounded-2xl p-8 border border-[#d4eedd] text-center transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3
            className="text-2xl font-bold text-[#1c2b1e] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Had a great experience with Clover?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We'd love to hear about it. Your review helps other homeowners and businesses find a junk removal crew they can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-[#f5a623] hover:bg-[#e09510] text-[#1c2b1e] font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 active:scale-95 shadow-md"
            >
              Leave a Review
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#1a7a3c] text-[#1a7a3c] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-[#e8f5ed] transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
