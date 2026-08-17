/**
 * FAQ Page — Clover Junk Removal
 * Design: Fresh & Grounded | Calm editorial layout, warm ivory ground, green accordion panels with amber cues.
 */
import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";

const questions = [
  {
    question: "How do I request a pickup?",
    answer: "Use the booking form to choose a service, enter your pickup address, and describe the items you want removed. You can also call (910) 308-8190 to discuss your request.",
  },
  {
    question: "Do you provide estimates?",
    answer: "Yes. Share the type and amount of material you need removed, along with any relevant access details, and Clover Junk Removal can review your request and discuss the next steps.",
  },
  {
    question: "What should I include in my booking request?",
    answer: "Please include your name, phone number, service address, the type of items or debris, approximate quantity, and anything that affects access, such as stairs, gates, narrow hallways, or storage-unit access.",
  },
  {
    question: "What is Priority Service?",
    answer: "Priority Service is an optional request that helps flag your booking for priority handling. It has a $125 upcharge only if priority service is confirmed. The booking form does not collect payment.",
  },
  {
    question: "Does booking online guarantee a pickup time?",
    answer: "No. Online booking sends your request to the Clover Junk Removal team. A pickup time is confirmed after your request has been reviewed and scheduling is discussed with you.",
  },
  {
    question: "Can you remove appliances, furniture, or yard debris?",
    answer: "These are service categories shown on the website. For any specific item, use the booking form or call with the details so the team can confirm whether it can be included in your pickup.",
  },
  {
    question: "Where are you located?",
    answer: "Clover Junk Removal is based in Clover, South Carolina 29710. Add your service address to a booking request so the team can review the location details.",
  },
  {
    question: "What happens after I submit the form?",
    answer: "Your submission is sent to Clover Junk Removal. The team will use the information you provide to follow up about your request, including the items, location, service choice, and any priority-service selection.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f4] text-[#1c2b1e]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />
      <main>
        <PageBanner
          eyebrow="Helpful answers"
          title="Clear answers before the clutter clears."
          description="Review the most common questions about booking, priority service, estimates, and preparing for your pickup request."
          actionLabel="Book a Pickup"
          actionHref="/book"
        />
        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#1a7a3c]">FAQ</p>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Need a detail we did not cover?
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-gray-600">The fastest way to get an answer for your particular pickup is to tell us what you have and where it is located.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href="tel:+19103088190" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1a7a3c] px-5 py-3 text-sm font-bold text-[#1a7a3c] transition hover:bg-[#e8f5ed]"><Phone size={16} /> Call Us</a>
                <Link href="/book" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5a623] px-5 py-3 text-sm font-bold text-[#1c2b1e] transition hover:bg-[#e09510]">Start a Booking <ArrowRight size={16} /></Link>
              </div>
            </aside>

            <div className="rounded-[2rem] border border-[#e3eee6] bg-white p-3 shadow-[0_20px_55px_rgba(13,43,24,0.06)] sm:p-6">
              <Accordion type="single" collapsible className="w-full">
                {questions.map((item, index) => (
                  <AccordionItem key={item.question} value={`question-${index}`} className="border-[#e8f0ea] px-3 sm:px-4">
                    <AccordionTrigger className="py-5 text-base font-bold text-[#1c2b1e] no-underline hover:no-underline sm:text-lg">{item.question}</AccordionTrigger>
                    <AccordionContent className="max-w-2xl pb-5 text-sm leading-relaxed text-gray-600 sm:text-base">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
