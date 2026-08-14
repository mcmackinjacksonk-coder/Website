/**
 * Terms Page — Clover Junk Removal
 * Design: Fresh & Grounded | Minimal editorial service-request expectations with transparent booking language.
 */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f4] text-[#1c2b1e]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />
      <main>
        <PageBanner eyebrow="Service requests" title="Booking terms overview" description="The online form is the starting point for a Clover Junk Removal request. It helps the business review the job details and follow up with you." />
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="rounded-3xl border border-[#e3eee6] bg-white p-7 shadow-[0_20px_55px_rgba(13,43,24,0.055)] sm:p-10">
            <h2 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>What submitting the form means</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">Submitting a booking request does not automatically confirm service, a pickup time, pricing, or payment. Clover Junk Removal reviews the information provided and follows up to discuss the request.</p>
            <h2 className="mt-8 text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Priority Service</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">If you select Priority Service, the request indicates that you would like priority handling. A $50 upcharge applies only if priority service is confirmed. The booking form does not collect payment.</p>
            <h2 className="mt-8 text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Questions</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">Call <a className="font-bold text-[#1a7a3c] hover:underline" href="tel:+19103088190">(910) 308-8190</a> before submitting if you have questions about a particular item or request.</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
