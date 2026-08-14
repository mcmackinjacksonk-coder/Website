/**
 * Footer — Clover Junk Removal
 * Design: Dark green footer with brand mark, links, and tagline
 */
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import BrandLockup from "./BrandLockup";

export default function Footer() {
  const services = ["Furniture Removal", "Appliance Pickup", "Full Cleanouts", "Commercial Junk", "Yard Debris", "Construction Debris"];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "Book a Pickup", href: "/book" },
    { label: "How It Works", href: "/#how-it-works" },
  ];

  return (
    <footer className="bg-[#0d2b18] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5"><BrandLockup inverse /></div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Booking requests for household and business junk removal in
              Clover, South Carolina. Tell us what needs to be removed.
            </p>
            <Link href="/book" className="inline-flex items-center gap-2 text-sm font-bold text-[#f5a623] transition hover:text-white">Start a booking <ArrowRight size={15} /></Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-[#f5a623] text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-[#1a7a3c] text-xs">🍀</span>
                    {s}
                  </Link>
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
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#f5a623] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
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
              href="/book"
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
            <Link href="/privacy" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
