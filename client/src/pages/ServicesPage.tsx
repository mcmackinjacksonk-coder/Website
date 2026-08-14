/**
 * Services Page — Clover Junk Removal
 * Design: Fresh & Grounded | Layered off-white canvas, asymmetric cards, deep green and amber confidence signals.
 */
import { Link } from "wouter";
import {
  ArrowRight,
  Building2,
  HardHat,
  House,
  MapPin,
  Phone,
  Refrigerator,
  Sofa,
  Trees,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";

const services = [
  {
    title: "Furniture Removal",
    detail: "Couches, mattresses, tables, dressers, and single-item pickups.",
    icon: Sofa,
    note: "A practical choice for move-outs, room refreshes, and bulky pieces.",
  },
  {
    title: "Appliance Pickup",
    detail: "Old appliances and household equipment that need to be cleared out.",
    icon: Refrigerator,
    note: "Tell us what you have so we can confirm the pickup details first.",
  },
  {
    title: "Full Cleanouts",
    detail: "Room-by-room, garage, attic, storage, and property cleanout help.",
    icon: House,
    note: "Share the size of the job and any access notes in your booking request.",
  },
  {
    title: "Commercial Junk",
    detail: "Office furniture, retail fixtures, boxes, and general business clutter.",
    icon: Building2,
    note: "Useful for refreshes, relocations, and clearing space between projects.",
  },
  {
    title: "Yard Debris",
    detail: "Bagged leaves, branches, brush, and outdoor clutter after yard work.",
    icon: Trees,
    note: "Please describe the material and approximate amount when requesting service.",
  },
  {
    title: "Construction Debris",
    detail: "Leftover materials and job-site debris after repairs or renovations.",
    icon: HardHat,
    note: "Let us know the debris type and whether there are stairs or tight access.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f4] text-[#1c2b1e]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />
      <main>
        <PageBanner
          eyebrow="What we remove"
          title="Clear the clutter. Keep the momentum."
          description="Clover Junk Removal helps homeowners and businesses in Clover, South Carolina request reliable removal for the items taking up their space."
          actionLabel="Schedule a Pickup"
          actionHref="/book"
        />

        <section className="relative py-20 sm:py-24">
          <div className="absolute right-0 top-20 hidden h-80 w-1/3 rounded-l-full bg-[#e8f5ed] lg:block" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#1a7a3c]">Built around your job</p>
                <h2 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  The right request starts with the right details.
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-gray-600 lg:justify-self-end">
                Select the service that fits your project, then use the booking form to tell us about your items, address, and timing.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className={`group rounded-3xl border border-[#e3eee6] bg-white p-7 shadow-[0_16px_40px_rgba(13,43,24,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(13,43,24,0.12)] ${index === 1 ? "lg:translate-y-8" : ""}`}
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5ed] text-[#1a7a3c] transition duration-300 group-hover:bg-[#1a7a3c] group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.detail}</p>
                    <p className="mt-5 border-t border-[#edf3ef] pt-5 text-xs leading-relaxed text-[#51705b]">{service.note}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#e8f5ed] py-16 sm:py-20">
          <div className="pointer-events-none absolute -bottom-16 left-[42%] h-64 w-64 rotate-12 rounded-[38%] border-[42px] border-[#1a7a3c]/5" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_0.85fr_0.8fr] lg:items-center lg:px-8">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#1a7a3c]">Before you book</p>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                A few details help us prepare for your request.
              </h2>
            </div>
            <div className="relative min-h-56 overflow-hidden rounded-[2rem] shadow-[0_20px_45px_rgba(13,43,24,0.13)]">
              <img src="/manus-storage/clover-service-detail_c022de1f.jpg" alt="Household items prepared for a junk removal request" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d2b18]/80 to-transparent px-6 pb-5 pt-16 text-sm font-bold text-white">Prepared details make a better request.</div>
            </div>
            <div className="rounded-3xl bg-[#0d2b18] p-7 text-white shadow-xl">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 shrink-0 text-[#f5a623]" size={20} />
                <p className="text-sm leading-relaxed text-white/75">Add the pickup address, a description of what needs to go, and any access notes such as stairs, a gate, or a storage unit.</p>
              </div>
              <Link href="/faq" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#f5a623] transition hover:text-white">
                Review common questions <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#f9f7f4] py-16 sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a7a3c]">Ready when you are</p>
              <h2 className="mt-3 text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Tell us what needs to be removed.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="tel:+19103088190" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1a7a3c] px-6 py-3.5 text-sm font-bold text-[#1a7a3c] transition hover:bg-[#e8f5ed]">
                <Phone size={16} /> Call (910) 308-8190
              </a>
              <Link href="/book" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5a623] px-6 py-3.5 text-sm font-bold text-[#1c2b1e] transition hover:bg-[#e09510] active:scale-[0.97]">
                Book Pickup <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
