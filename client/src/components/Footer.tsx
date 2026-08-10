/**
 * Footer — Clover Junk Removal
 * Design: Dark green footer with brand mark, links, and tagline
 */
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const services = [
    "Furniture Removal",
    "Appliance Pickup",
    "Full Cleanouts",
    "Commercial Junk",
    "Yard Debris",
    "Construction Debris",
  ];

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Book Online", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0d2b18] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/manus-storage/clover_logo_73fe7b49.png"
                alt="Clover Junk Removal"
                className="h-10 w-10 object-contain"
              />
              <div>
                <p
                  className="font-bold text-lg text-white leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Clover
                </p>
                <p className="text-white/50 text-xs uppercase tracking-widest">
                  Junk Removal
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Fast, affordable junk removal for homes and businesses. We clear
              it out so you can move on.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-[#f5a623] rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Social link"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-[#f5a623] text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-[#1a7a3c] text-xs">🍀</span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#f5a623] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+19103088190" className="flex items-center gap-3 text-white/70 hover:text-[#f5a623] text-sm transition-colors duration-200">
                <Phone size={15} className="shrink-0 text-[#f5a623]" />
                (910) 308-8190
              </a>
              <a href="mailto:pnut1482@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-[#f5a623] text-sm transition-colors duration-200">
                <Mail size={15} className="shrink-0 text-[#f5a623]" />
                pnut1482@gmail.com
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={15} className="shrink-0 text-[#f5a623] mt-0.5" />
                Clover, SC 29710
              </div>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-block bg-[#f5a623] hover:bg-[#e09510] text-[#1c2b1e] font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 active:scale-95"
            >
              Book Pickup
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Clover Junk Removal. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
