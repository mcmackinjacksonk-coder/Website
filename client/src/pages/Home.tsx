/**
 * Home Page — Clover Junk Removal
 * Design: Fresh & Grounded | Playfair Display + DM Sans | Deep Clover Green + Amber
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import RequestStandards from "@/components/RequestStandards";
import HowItWorks from "@/components/HowItWorks";
import FaqPreview from "@/components/FaqPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <RequestStandards />
      <HowItWorks />
      <FaqPreview />
      <Contact />
      <Footer />
    </div>
  );
}
