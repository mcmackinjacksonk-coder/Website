/**
 * Services Section — Clover Junk Removal
 * Design: LEFT-ANCHORED headline, asymmetric 2-col layout, large clover watermark
 * Clover motif: oversized decorative clover SVG behind the section title
 */
import { useEffect, useRef, useState } from "react";
import {
  Sofa,
  Refrigerator,
  Trash2,
  Building2,
  TreePine,
  Hammer,
} from "lucide-react";

const services = [
  {
    icon: Sofa,
    title: "Furniture Removal",
    desc: "Sofas, beds, dressers, tables — we haul away all unwanted furniture quickly and responsibly.",
  },
  {
    icon: Refrigerator,
    title: "Appliance Pickup",
    desc: "Fridges, washers, dryers, and more. We handle heavy appliances so you don't have to.",
  },
  {
    icon: Trash2,
    title: "Full Cleanouts",
    desc: "Garage, basement, attic, or whole-home cleanouts. We clear it all in one visit.",
  },
  {
    icon: Building2,
    title: "Commercial Junk",
    desc: "Office cleanouts, retail debris, and construction waste handled for businesses of all sizes.",
  },
  {
    icon: TreePine,
    title: "Yard Debris",
    desc: "Branches, brush, old fencing, and landscaping waste removed from your property.",
  },
  {
    icon: Hammer,
    title: "Construction Debris",
    desc: "Drywall, lumber, tiles, and renovation waste cleared fast so your project keeps moving.",
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

function ServiceCard({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  delay: number;
}) {
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
    <div
      ref={ref}
      className={`group bg-white rounded-2xl p-7 shadow-sm border border-[#e8f5ed] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-[#e8f5ed] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1a7a3c] transition-colors duration-300">
        <Icon size={22} className="text-[#1a7a3c] group-hover:text-white transition-colors duration-300" />
      </div>
      <h3
        className="text-lg font-bold text-[#1c2b1e] mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Services() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f9f7f4] relative overflow-hidden">
      {/* Large decorative clover watermark */}
      <CloverSVG className="absolute -right-16 top-8 w-80 h-80 text-[#1a7a3c]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetric: left-anchored header + right CTA */}
        <div
          ref={titleRef}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-xl">
            <span className="inline-block text-[#1a7a3c] font-semibold text-sm uppercase tracking-widest mb-3">
              What We Haul
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1c2b1e] mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We Take It All —<br />
              <span className="text-[#1a7a3c]">Every Last Piece.</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              From a single sofa to a full estate cleanout, Clover handles it all.
              Contact us for a free estimate on your specific needs.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#e09510] text-[#1c2b1e] font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 active:scale-95 shadow-md self-start lg:self-auto"
          >
            Reclaim Your Space
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} {...svc} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
