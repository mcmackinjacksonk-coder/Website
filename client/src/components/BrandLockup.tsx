/**
 * Brand Lockup — Clover Junk Removal
 * Design: Custom clover-and-haul-truck symbol with a strong serif wordmark for high-recognition site chrome.
 */
type BrandLockupProps = {
  inverse?: boolean;
  compact?: boolean;
};

function CloverTruckMark({ inverse }: { inverse: boolean }) {
  const markFill = inverse ? "#ffffff" : "#1a7a3c";
  const truckFill = inverse ? "#f5a623" : "#f5a623";
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <circle cx="22" cy="19" r="12" fill={markFill} opacity="0.94" />
      <circle cx="42" cy="19" r="12" fill={markFill} opacity="0.94" />
      <circle cx="22" cy="37" r="12" fill={markFill} opacity="0.94" />
      <circle cx="42" cy="37" r="12" fill={markFill} opacity="0.94" />
      <rect x="31" y="39" width="4" height="12" rx="2" fill={markFill} />
      <path d="M17 35h22c2.5 0 4.5 2 4.5 4.5V42h4.3l4.7 5.4V52h-3.2a4.3 4.3 0 0 1-8.5 0H28.2a4.3 4.3 0 0 1-8.5 0H17v-17Z" fill={truckFill} stroke={inverse ? "#0d2b18" : "#ffffff"} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M43.5 42H48l2.8 4h-7.3v-4Z" fill={inverse ? "#0d2b18" : "#1a7a3c"} opacity="0.85" />
      <circle cx="24" cy="52" r="2.6" fill={inverse ? "#0d2b18" : "#1a7a3c"} />
      <circle cx="45" cy="52" r="2.6" fill={inverse ? "#0d2b18" : "#1a7a3c"} />
    </svg>
  );
}

export default function BrandLockup({ inverse = false, compact = false }: BrandLockupProps) {
  const mainColor = inverse ? "text-white" : "text-[#1a7a3c]";
  const subColor = inverse ? "text-white/60" : "text-gray-500";
  return (
    <div className="flex items-center gap-3">
      <div className={`shrink-0 ${compact ? "h-10 w-10" : "h-12 w-12"}`}><CloverTruckMark inverse={inverse} /></div>
      <div className="flex flex-col leading-[0.9]">
        <span className={`${compact ? "text-lg" : "text-xl"} font-black tracking-tight ${mainColor}`} style={{ fontFamily: "'Playfair Display', serif" }}>Clover</span>
        <span className={`mt-1 text-[0.61rem] font-extrabold uppercase tracking-[0.18em] ${subColor}`}>Junk Removal</span>
      </div>
    </div>
  );
}
