/**
 * Terms of Service — Clover Junk Removal
 * Design: Fresh & Grounded | Detailed service-request terms with editorial reading hierarchy and transparent operating terms.
 */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";

const EFFECTIVE_DATE = "August 14, 2026";

function TermsHeading({ children }: { children: string }) {
  return <h2 className="mt-10 text-2xl font-bold leading-tight text-[#1c2b1e] sm:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>{children}</h2>;
}

function TermsText({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">{children}</p>;
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f4] text-[#1c2b1e]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />
      <main>
        <PageBanner eyebrow="Service requests" title="Terms of Service" description="The terms that apply when you use this website or submit a booking request to Clover Junk Removal." />
        <section className="border-b border-[#dcebe0] bg-[#e8f5ed]">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p className="font-semibold text-[#1a7a3c]">Effective date: {EFFECTIVE_DATE}</p>
            <p className="text-[#50705b]">Draft for attorney review before use.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-[#dcebe0] bg-white p-6 shadow-[0_16px_40px_rgba(13,43,24,0.04)]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1a7a3c]">On this page</p>
                <nav className="mt-4 flex flex-col gap-3 text-sm font-semibold text-[#50705b]" aria-label="Terms of service sections">
                  <a href="#agreement" className="hover:text-[#1a7a3c]">Agreement to terms</a>
                  <a href="#requests" className="hover:text-[#1a7a3c]">Booking requests</a>
                  <a href="#priority" className="hover:text-[#1a7a3c]">Priority Service</a>
                  <a href="#customer" className="hover:text-[#1a7a3c]">Customer responsibilities</a>
                  <a href="#disclaimers" className="hover:text-[#1a7a3c]">Disclaimers and liability</a>
                  <a href="#contact" className="hover:text-[#1a7a3c]">Contact us</a>
                </nav>
              </div>
            </aside>

            <article className="rounded-[2rem] border border-[#e3eee6] bg-white p-7 shadow-[0_20px_55px_rgba(13,43,24,0.055)] sm:p-10 lg:p-12">
              <div className="rounded-2xl border border-[#f0d79b] bg-[#fff8e6] p-5 text-sm leading-6 text-[#6e5420]">
                <strong className="font-bold">Important:</strong> These Terms of Service are a working website-policy draft. They should be reviewed and finalized by a qualified attorney before use, particularly for service scope, payment, insurance, cancellation, liability, and local-regulatory requirements.
              </div>

              <section id="agreement">
                <TermsHeading>1. Agreement to these terms</TermsHeading>
                <TermsText>These Terms of Service govern your use of the Clover Junk Removal website and any booking request you submit through it. By accessing the website or submitting a request, you agree to these terms. If you do not agree, do not use the website or booking form.</TermsText>
                <TermsText>“Clover Junk Removal,” “we,” “us,” and “our” refer to the business operating from Clover, South Carolina 29710. “You” refers to a website visitor or person submitting a booking request.</TermsText>
              </section>

              <section id="requests">
                <TermsHeading>2. Booking requests are not service confirmations</TermsHeading>
                <TermsText>The website allows you to submit a request for junk-removal services. A submitted request is not a confirmed appointment, service agreement, pickup time, estimate, price, or payment authorization. Service details are subject to review and direct confirmation between you and Clover Junk Removal.</TermsText>
                <TermsText>Information shown on the website, including service categories, is for general informational purposes. Whether a specific item, property, location, or request can be serviced may depend on the details you provide and any additional conditions discussed during follow-up.</TermsText>
              </section>

              <section id="priority">
                <TermsHeading>3. Optional Priority Service</TermsHeading>
                <TermsText>The booking form includes an optional “Request Priority Service (+$50)” checkbox. Selecting this checkbox asks Clover Junk Removal to consider your request for priority handling. The $50 upcharge applies only if Priority Service is confirmed with you. The website does not collect payment, and selecting the checkbox does not itself create a charge, appointment, or guarantee of service availability.</TermsText>
              </section>

              <section id="pricing">
                <TermsHeading>4. Pricing, payment, and service scope</TermsHeading>
                <TermsText>Pricing, payment method, service scope, timing, and any additional charges must be discussed and confirmed outside the website before work begins. Do not submit credit-card information or other payment information through the booking form. Any service scope may be adjusted if the information provided in the request is incomplete or materially different from the actual job conditions.</TermsText>
              </section>

              <section id="customer">
                <TermsHeading>5. Your responsibilities</TermsHeading>
                <TermsText>You are responsible for providing accurate contact information, service address information, item descriptions, access details, and other information relevant to your request. You should identify conditions that could affect service, including stairs, gates, limited parking, storage-unit requirements, restricted access, unsafe conditions, or items requiring special handling.</TermsText>
                <TermsText>You represent that you have the authority to request service at the stated location and to authorize removal of the items you identify. Clover Junk Removal may decline, pause, or modify a request when information is inaccurate, access is unavailable, a condition appears unsafe, an item is outside the agreed scope, or a request cannot be reasonably completed.</TermsText>
              </section>

              <section id="cancellations">
                <TermsHeading>6. Changes, cancellations, and communications</TermsHeading>
                <TermsText>If you need to change or cancel a request, contact Clover Junk Removal as soon as possible at <a href="tel:+19103088190" className="font-bold text-[#1a7a3c] hover:underline">(910) 308-8190</a> or <a href="mailto:pnut1482@gmail.com" className="font-bold text-[#1a7a3c] hover:underline">pnut1482@gmail.com</a>. Any cancellation, rescheduling, availability, or fee terms not displayed on the website must be communicated and agreed upon separately.</TermsText>
                <TermsText>By submitting your contact information, you authorize Clover Junk Removal to contact you about the booking request using the phone number or email address you provide. This authorization is limited to communications related to your request unless you separately consent to another form of communication.</TermsText>
              </section>

              <section id="website-use">
                <TermsHeading>7. Acceptable website use and intellectual property</TermsHeading>
                <TermsText>You may use the website for lawful, personal, and business-information purposes. You may not interfere with the website, attempt to access systems or data without authorization, submit false or misleading requests, introduce malicious code, or use the website in a way that violates applicable law.</TermsText>
                <TermsText>The website’s text, design, branding, graphics, and other content are owned by or licensed to Clover Junk Removal and may not be copied, reproduced, or used for commercial purposes without permission, except as allowed by applicable law.</TermsText>
              </section>

              <section id="disclaimers">
                <TermsHeading>8. Disclaimers and limitation of liability</TermsHeading>
                <TermsText>To the maximum extent permitted by law, the website is provided on an “as is” and “as available” basis. Clover Junk Removal does not warrant that the website will always be available, error-free, secure, or suitable for every purpose. Website content does not create a guarantee, promise, or offer to provide service.</TermsText>
                <TermsText>To the maximum extent permitted by law, Clover Junk Removal will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from your use of, or inability to use, the website. Nothing in these terms limits liability that cannot lawfully be limited or excluded.</TermsText>
              </section>

              <section id="indemnity">
                <TermsHeading>9. Indemnity</TermsHeading>
                <TermsText>To the extent permitted by law, you agree to defend, indemnify, and hold harmless Clover Junk Removal from claims, liabilities, damages, losses, and expenses arising from your violation of these terms, your misuse of the website, or information you submit that is false, unlawful, or infringes another person’s rights.</TermsText>
              </section>

              <section id="governing-law">
                <TermsHeading>10. Governing law and changes</TermsHeading>
                <TermsText>These terms are governed by the laws of the State of South Carolina, without regard to conflict-of-law principles, except where applicable law requires otherwise. If any provision is found unenforceable, the remaining provisions will remain in effect to the extent permitted by law.</TermsText>
                <TermsText>Clover Junk Removal may update these terms from time to time. The effective date at the top of this page identifies the latest version. Continued use of the website after an update means the updated terms apply to your use, to the extent permitted by law.</TermsText>
              </section>

              <section id="contact">
                <TermsHeading>11. Contact us</TermsHeading>
                <TermsText>Questions about these Terms of Service can be sent to <a href="mailto:pnut1482@gmail.com" className="font-bold text-[#1a7a3c] hover:underline">pnut1482@gmail.com</a>, by phone at <a href="tel:+19103088190" className="font-bold text-[#1a7a3c] hover:underline">(910) 308-8190</a>, or by mail to Clover Junk Removal, Clover, SC 29710.</TermsText>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
