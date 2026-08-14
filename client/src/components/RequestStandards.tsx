/**
 * Request Standards — Clover Junk Removal
 * Design: Fresh & Grounded | Premium intake guidance in a dark-green editorial split layout with amber details.
 */
import { ClipboardList, MapPinned, PackageOpen, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const details = [
  { icon: MapPinned, title: "Your pickup address", copy: "Enter the complete service address so the request begins with the right location." },
  { icon: PackageOpen, title: "What needs to go", copy: "List the item types, approximate amount, and anything especially large or unusual." },
  { icon: ClipboardList, title: "Access details", copy: "Mention stairs, gates, unit numbers, parking, or anything that could affect pickup." },
];

export default function RequestStandards() {
  return (
    <section className="relative overflow-hidden bg-[#0d2b18] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rotate-12 rounded-full border-[50px] border-white/[0.035] sm:h-[30rem] sm:w-[30rem]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5a623]">Make the request work harder</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>A clear request creates a clearer next step.</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">Clover’s booking form is designed to collect the details that matter before the team follows up. This is how you help make the conversation more useful from the start.</p>
          <Link href="/book" className="mt-8 inline-flex rounded-full bg-[#f5a623] px-6 py-3.5 text-sm font-bold text-[#1c2b1e] transition hover:bg-[#e09510] active:scale-[0.97]">Start a detailed request</Link>
        </div>
        <div className="grid gap-5">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={`grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:grid-cols-[3.5rem_1fr] sm:items-start sm:p-8 ${index === 1 ? "lg:ml-10" : ""}`}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5a623]/15 text-[#f5a623]"><Icon size={23} /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">0{index + 1}</p>
                  <h3 className="mt-2 text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">{item.copy}</p>
                </div>
              </article>
            );
          })}
          <div className="flex items-start gap-3 rounded-[1.75rem] border border-[#f5a623]/25 bg-[#f5a623]/10 p-6 text-sm leading-relaxed text-white/75 lg:mr-10">
            <ShieldCheck className="mt-0.5 shrink-0 text-[#f5a623]" size={20} />
            <p><span className="font-bold text-white">Optional Priority Service:</span> selecting the priority option requests priority handling. A $50 upcharge applies only when priority service is confirmed, and the website does not collect payment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
