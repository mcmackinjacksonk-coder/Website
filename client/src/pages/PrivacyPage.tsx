/**
 * Privacy Page — Clover Junk Removal
 * Design: Fresh & Grounded | Minimal editorial legal page for a clear recovery path from the footer.
 */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f4] text-[#1c2b1e]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />
      <main>
        <PageBanner eyebrow="Site information" title="Privacy overview" description="This page explains the information submitted through the Clover Junk Removal website and how to contact the business with questions." />
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="rounded-3xl border border-[#e3eee6] bg-white p-7 shadow-[0_20px_55px_rgba(13,43,24,0.055)] sm:p-10">
            <p className="text-sm leading-relaxed text-gray-600">When you use the booking form, you may provide your name, phone number, email address, service address, requested service, priority-service selection, and message. This information is sent through the website’s form service so Clover Junk Removal can follow up about your request.</p>
            <h2 className="mt-8 text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Questions about your information</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">For questions about a request you submitted or the information connected to it, contact Clover Junk Removal at <a className="font-bold text-[#1a7a3c] hover:underline" href="mailto:pnut1482@gmail.com">pnut1482@gmail.com</a> or call <a className="font-bold text-[#1a7a3c] hover:underline" href="tel:+19103088190">(910) 308-8190</a>.</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
