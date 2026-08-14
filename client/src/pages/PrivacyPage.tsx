/**
 * Privacy Policy — Clover Junk Removal
 * Design: Fresh & Grounded | Detailed legal-policy reading experience with an editorial side rail and clear warm-white sections.
 */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";

const EFFECTIVE_DATE = "August 14, 2026";

function PolicyHeading({ children }: { children: string }) {
  return <h2 className="mt-10 text-2xl font-bold leading-tight text-[#1c2b1e] sm:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>{children}</h2>;
}

function PolicyText({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">{children}</p>;
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f4] text-[#1c2b1e]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />
      <main>
        <PageBanner eyebrow="Legal information" title="Privacy Policy" description="How Clover Junk Removal collects, uses, shares, and protects information submitted through this website." />
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
                <nav className="mt-4 flex flex-col gap-3 text-sm font-semibold text-[#50705b]" aria-label="Privacy policy sections">
                  <a href="#scope" className="hover:text-[#1a7a3c]">Scope and acceptance</a>
                  <a href="#information" className="hover:text-[#1a7a3c]">Information we collect</a>
                  <a href="#use" className="hover:text-[#1a7a3c]">How we use information</a>
                  <a href="#sharing" className="hover:text-[#1a7a3c]">How we share information</a>
                  <a href="#choices" className="hover:text-[#1a7a3c]">Your choices and rights</a>
                  <a href="#contact" className="hover:text-[#1a7a3c]">Contact us</a>
                </nav>
              </div>
            </aside>

            <article className="rounded-[2rem] border border-[#e3eee6] bg-white p-7 shadow-[0_20px_55px_rgba(13,43,24,0.055)] sm:p-10 lg:p-12">
              <div className="rounded-2xl border border-[#f0d79b] bg-[#fff8e6] p-5 text-sm leading-6 text-[#6e5420]">
                <strong className="font-bold">Important:</strong> This Privacy Policy describes the website as currently configured, including its booking form and Formspree submission service. Business owners should have a qualified attorney review this draft and update it when website practices, vendors, or legal requirements change.
              </div>

              <section id="scope">
                <PolicyHeading>1. Scope and acceptance</PolicyHeading>
                <PolicyText>This Privacy Policy applies to the Clover Junk Removal website, including its online booking-request form. By using the website or submitting information through the form, you acknowledge the practices described in this policy.</PolicyText>
                <PolicyText>Clover Junk Removal is located in Clover, South Carolina 29710. Questions about this policy or a booking request may be directed to <a href="mailto:pnut1482@gmail.com" className="font-bold text-[#1a7a3c] hover:underline">pnut1482@gmail.com</a> or <a href="tel:+19103088190" className="font-bold text-[#1a7a3c] hover:underline">(910) 308-8190</a>.</PolicyText>
              </section>

              <section id="information">
                <PolicyHeading>2. Information we collect</PolicyHeading>
                <PolicyText>When you submit a booking request, you may provide your name, telephone number, email address, service address, requested service type, optional Priority Service selection, and message or access details. Your message may include information about the items you want removed or the location where service is requested.</PolicyText>
                <PolicyText>The website and its service providers may also receive limited technical information that is ordinarily generated when you use a website, such as browser type, device information, IP address, page activity, referral source, and approximate access time. This information may be collected through hosting, security, analytics, or form-processing systems.</PolicyText>
                <PolicyText>Please do not submit payment-card information, Social Security numbers, health information, account passwords, or other sensitive personal information through the booking form. The website does not process payment through the form.</PolicyText>
              </section>

              <section id="use">
                <PolicyHeading>3. How we use information</PolicyHeading>
                <PolicyText>Clover Junk Removal may use booking information to review and respond to your request, discuss service details, verify the service address, communicate about scheduling, address questions, and maintain records related to customer inquiries.</PolicyText>
                <PolicyText>Technical information may be used to operate, secure, troubleshoot, maintain, and improve the website. Information may also be used when reasonably necessary to comply with legal obligations, respond to lawful requests, protect the website, or prevent fraud or misuse.</PolicyText>
              </section>

              <section id="sharing">
                <PolicyHeading>4. How we share information</PolicyHeading>
                <PolicyText>Booking-form submissions are processed through Formspree, a third-party form-processing service. Formspree receives form-submission information to transmit the request to Clover Junk Removal. Formspree’s handling of information is governed by its own <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noreferrer" className="font-bold text-[#1a7a3c] hover:underline">Privacy Policy</a>.</PolicyText>
                <PolicyText>Information may also be shared with service providers that help operate the website or respond to your request, when required by law, to protect rights or safety, or as part of a business transfer such as a merger, acquisition, sale, or reorganization. Clover Junk Removal does not request payment through this website’s booking form.</PolicyText>
              </section>

              <section id="retention">
                <PolicyHeading>5. Retention and security</PolicyHeading>
                <PolicyText>Clover Junk Removal may retain booking information for as long as reasonably necessary to respond to requests, maintain business records, resolve questions or disputes, comply with legal obligations, and protect the website and business. Retention periods may vary based on the purpose of the information and applicable requirements.</PolicyText>
                <PolicyText>Reasonable administrative, technical, and organizational measures are used to help protect information. No transmission, storage system, or website can be guaranteed completely secure, and you provide information through the website at your own discretion.</PolicyText>
              </section>

              <section id="choices">
                <PolicyHeading>6. Your choices and privacy rights</PolicyHeading>
                <PolicyText>You may contact Clover Junk Removal to request access to, correction of, or deletion of personal information submitted through the website, subject to verification and any applicable legal or recordkeeping obligations. You may also choose not to submit the booking form and instead contact the business by phone.</PolicyText>
                <PolicyText>Depending on where you live, you may have additional privacy rights under applicable law. To submit a privacy-related request, email <a href="mailto:pnut1482@gmail.com" className="font-bold text-[#1a7a3c] hover:underline">pnut1482@gmail.com</a> with the subject line “Privacy Request” and include enough information for us to verify and respond to your request.</PolicyText>
              </section>

              <section id="children">
                <PolicyHeading>7. Children’s privacy</PolicyHeading>
                <PolicyText>This website is not directed to children under 13, and Clover Junk Removal does not knowingly seek to collect personal information from children through the booking form. If you believe a child has submitted information through the website, contact us so the request can be reviewed.</PolicyText>
              </section>

              <section id="external-links">
                <PolicyHeading>8. External links and changes to this policy</PolicyHeading>
                <PolicyText>The website may link to third-party websites. Clover Junk Removal is not responsible for the privacy practices or content of third-party services. Review each third party’s privacy policy before providing information to it.</PolicyText>
                <PolicyText>Clover Junk Removal may update this Privacy Policy as website practices or legal requirements change. An updated effective date will appear at the top of this page. Continued use of the website after an update means the updated policy applies to your use, to the extent permitted by law.</PolicyText>
              </section>

              <section id="contact">
                <PolicyHeading>9. Contact us</PolicyHeading>
                <PolicyText>For privacy questions or requests, contact Clover Junk Removal at <a href="mailto:pnut1482@gmail.com" className="font-bold text-[#1a7a3c] hover:underline">pnut1482@gmail.com</a>, call <a href="tel:+19103088190" className="font-bold text-[#1a7a3c] hover:underline">(910) 308-8190</a>, or write to Clover Junk Removal, Clover, SC 29710.</PolicyText>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
