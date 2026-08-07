/**
 * Contact / Booking Section — Clover Junk Removal
 * Design: Split layout — info left, form right | large clover watermark
 * Clover motif: oversized clover behind the section header
 */
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";

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

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Send to Formspree
      const response = await fetch("https://formspree.io/f/xwlepnwg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          message: form.message,
        }),
      });

      if (response.ok) {
        toast.success("Request received! We'll call you within the hour.", {
          description: "Our team will confirm your booking shortly.",
        });
        setForm({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        toast.error("Failed to submit request", {
          description: "Please try again or call us directly.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit request", {
        description: "Please try again or call us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "(803) 579-2165", href: "tel:+18035792165" },
    { icon: Mail, label: "Email", value: "hello@cloverjunk.com", href: "mailto:hello@cloverjunk.com" },
    { icon: MapPin, label: "Service Area", value: "Austin & Surrounding Areas", href: "#" },
    { icon: Clock, label: "Hours", value: "Mon–Sat: 7am–7pm | Sun: 8am–5pm", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#f9f7f4] relative overflow-hidden">
      {/* Large clover watermark */}
      <CloverSVG className="absolute -top-16 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] text-[#1a7a3c]/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered header for this section (contrast with adjacent asymmetric sections) */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#1a7a3c] font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#1c2b1e] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Reclaim Your Space?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            Fill out the form and we'll reach out within the hour to confirm
            your appointment. Same-day pickup often available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-[#1a7a3c] rounded-2xl p-8 text-white relative overflow-hidden">
              <CloverSVG className="absolute -bottom-8 -right-8 w-40 h-40 text-white/10 pointer-events-none" />
              <h3
                className="text-2xl font-bold mb-6 relative z-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact Info
              </h3>
              <div className="flex flex-col gap-5 relative z-10">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#f5a623] transition-colors duration-200">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      <p className="text-white text-sm font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Free estimate note */}
              <div className="bg-[#e8f5ed] rounded-2xl p-6 border border-[#d4eedd]">
              <p className="text-[#1a7a3c] font-semibold text-sm mb-1">
                🍀 Free, No-Obligation Estimates
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We provide upfront pricing before any work begins. No hidden fees.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8f5ed]"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1c2b1e] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl border border-[#e8f5ed] bg-[#f9f7f4] text-[#1c2b1e] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a7a3c]/30 focus:border-[#1a7a3c] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1c2b1e] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(803) 579-2165"
                    className="w-full px-4 py-3 rounded-xl border border-[#e8f5ed] bg-[#f9f7f4] text-[#1c2b1e] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a7a3c]/30 focus:border-[#1a7a3c] transition-all"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-semibold text-[#1c2b1e] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#e8f5ed] bg-[#f9f7f4] text-[#1c2b1e] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a7a3c]/30 focus:border-[#1a7a3c] transition-all"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-semibold text-[#1c2b1e] mb-1.5">
                  Service Type *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#e8f5ed] bg-[#f9f7f4] text-[#1c2b1e] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a7a3c]/30 focus:border-[#1a7a3c] transition-all"
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="furniture">Furniture Removal</option>
                  <option value="appliance">Appliance Pickup</option>
                  <option value="cleanout">Full Cleanout</option>
                  <option value="commercial">Commercial Junk</option>
                  <option value="yard">Yard Debris</option>
                  <option value="construction">Construction Debris</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div className="mb-7">
                <label className="block text-sm font-semibold text-[#1c2b1e] mb-1.5">
                  Tell Us More
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe what needs to be removed, approximate quantity, and any special access notes..."
                  className="w-full px-4 py-3 rounded-xl border border-[#e8f5ed] bg-[#f9f7f4] text-[#1c2b1e] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a7a3c]/30 focus:border-[#1a7a3c] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-[#f5a623] hover:bg-[#e09510] disabled:opacity-60 text-[#1c2b1e] font-bold text-base py-4 rounded-full transition-all duration-200 active:scale-[0.98] shadow-md"
              >
                {submitting ? (
                  <span className="animate-spin w-5 h-5 border-2 border-[#1c2b1e]/30 border-t-[#1c2b1e] rounded-full" />
                ) : (
                  <>
                    Schedule My Pickup
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
