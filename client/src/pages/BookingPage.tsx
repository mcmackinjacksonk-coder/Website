/**
 * Booking Page — Clover Junk Removal
 * Design: Fresh & Grounded | Focused booking entry with transparent service expectations and the established booking form.
 */
import { CheckCircle2, ShieldCheck } from "lucide-react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f4] text-[#1c2b1e]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />
      <main>
        <PageBanner
          eyebrow="Request a pickup"
          title="Send the details. We’ll take it from there."
          description="Choose your service, add the pickup address, and describe the job. Your request is sent directly to Clover Junk Removal for follow-up."
        />
        <section className="bg-[#e8f5ed] py-10">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
            {[
              "Add your service address and job details.",
              "Select Priority Service only if you want to request it.",
              "Pickup timing and service are confirmed after follow-up.",
            ].map((detail) => (
              <div key={detail} className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 text-sm font-medium text-[#294b34]">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#1a7a3c]" size={18} />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </section>
        <Contact />
        <section className="bg-[#0d2b18] py-12 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 shrink-0 text-[#f5a623]" size={22} />
              <p className="max-w-2xl text-sm leading-relaxed text-white/75">This booking form sends a request for follow-up. It does not process payment or automatically confirm a pickup time.</p>
            </div>
            <a href="tel:+19103088190" className="shrink-0 text-sm font-bold text-[#f5a623] transition hover:text-white">Questions? Call (910) 308-8190</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
