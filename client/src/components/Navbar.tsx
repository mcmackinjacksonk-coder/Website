/**
 * Navbar — Clover Junk Removal
 * Design: Fresh & Grounded | Route-aware navigation; transparent over home hero and solid white on interior pages.
 */
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import BrandLockup from "./BrandLockup";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Book", href: "/book" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const hasSolidBackground = scrolled || location !== "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${hasSolidBackground ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="group" aria-label="Clover Junk Removal home">
            <BrandLockup inverse={!hasSolidBackground} compact />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} aria-current={location === link.href ? "page" : undefined} className={`text-sm font-semibold transition-colors duration-200 hover:text-[#1a7a3c] ${hasSolidBackground ? "text-gray-700" : "text-white/90 hover:text-white"}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="tel:+19103088190" className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${hasSolidBackground ? "text-[#1a7a3c]" : "text-white"}`}>
              <Phone size={15} /> (910) 308-8190
            </a>
            <Link href="/book" className="rounded-full bg-[#f5a623] px-5 py-2.5 text-sm font-bold text-[#1c2b1e] shadow-md transition duration-200 hover:bg-[#e09510] active:scale-[0.97]">Book Pickup</Link>
          </div>

          <button onClick={() => setMenuOpen((open) => !open)} className={`rounded-lg p-2 transition-colors lg:hidden ${hasSolidBackground ? "text-gray-700" : "text-white"}`} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-gray-100 bg-white shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-base font-semibold text-gray-700 transition-colors hover:bg-[#e8f5ed] hover:text-[#1a7a3c]">
                {link.label}
              </Link>
            ))}
            <a href="tel:+19103088190" className="mt-2 flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#1a7a3c]"><Phone size={15} /> (910) 308-8190</a>
            <Link href="/book" onClick={() => setMenuOpen(false)} className="mt-1 rounded-full bg-[#f5a623] py-3 text-center text-sm font-bold text-[#1c2b1e]">Book Pickup</Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
