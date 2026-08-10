/**
 * Navbar — Clover Junk Removal
 * Design: Fresh & Grounded | Deep Clover Green + Amber accents
 * Transitions from transparent (over hero) to solid white on scroll
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/manus-storage/clover_logo_73fe7b49.png"
              alt="Clover Junk Removal"
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span
                className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-[#1a7a3c]" : "text-white"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Clover
              </span>
              <span
                className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                  scrolled ? "text-gray-500" : "text-white/80"
                }`}
              >
                Junk Removal
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-[#1a7a3c] ${
                  scrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+19103088190"
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${
                scrolled ? "text-[#1a7a3c]" : "text-white"
              }`}
            >
              <Phone size={15} />
              (910) 308-8190
            </a>
            <a
              href="#contact"
              className="bg-[#f5a623] hover:bg-[#e09510] text-[#1c2b1e] font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95 shadow-md"
            >
              Book Pickup
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-semibold text-base py-1 hover:text-[#1a7a3c] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+19103088190"
              className="flex items-center gap-2 text-[#1a7a3c] font-semibold"
            >
              <Phone size={15} />
              (910) 308-8190
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-[#f5a623] text-[#1c2b1e] font-bold text-center py-3 rounded-full"
            >
              Book Pickup
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
