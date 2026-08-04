/**
 * Stats / Trust Bar — Clover Junk Removal
 * Design: Animated counters, clover accent dividers, warm white background
 */
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, suffix: "%", label: "Upfront Pricing" },
  { value: 0, suffix: "$", label: "Hidden Fees" },
  { value: 24, suffix: "/7", label: "Booking Available" },
  { value: 1, suffix: "", label: "Free Estimate" },
];

function CloverDivider() {
  return (
    <div className="hidden lg:flex items-center justify-center">
      <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#1a7a3c]/20" fill="currentColor">
        <circle cx="14" cy="14" r="10" />
        <circle cx="26" cy="14" r="10" />
        <circle cx="14" cy="26" r="10" />
        <circle cx="26" cy="26" r="10" />
        <rect x="19" y="28" width="2" height="8" rx="1" />
      </svg>
    </div>
  );
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-white border-y border-[#e8f5ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-7 gap-4 items-center">
          {stats.map((stat, i) => (
            <div key={`stat-${i}`}>
              <div className="text-center col-span-1">
                <div
                  className="text-4xl lg:text-5xl font-bold text-[#1a7a3c] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
              {i < stats.length - 1 && <CloverDivider key={`div-${i}`} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
