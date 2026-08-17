/**
 * FAQ Preview — Clover Junk Removal
 * Design: Fresh & Grounded | Asymmetric ivory panel, editorial questions, deep green and amber conversion path.
 */
import { ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "wouter";

const previewQuestions = [
  {
    question: "What should I include in my request?",
    answer: "Your address, the items you want removed, an approximate amount, and any access notes help us understand the job.",
  },
  {
    question: "How does Priority Service work?",
    answer: "It is an optional request with a $125 upcharge only if priority service is confirmed. The form does not collect payment.",
  },
];

export default function FaqPreview() {
  return (
    <section className="bg-[#f9f7f4] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="rounded-[2rem] bg-[#0d2b18] p-8 text-white sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5a623]/20 text-[#f5a623]"><HelpCircle size={24} /></div>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#f5a623]">Quick answers</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>The details should feel easy.</h2>
          <p className="mt-5 text-sm leading-relaxed text-white/70">Get a clearer picture of booking, estimates, priority service, and what happens after you reach out.</p>
          <Link href="/faq" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#f5a623] transition hover:text-white">
            Visit the FAQ <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {previewQuestions.map((item, index) => (
            <article key={item.question} className={`rounded-[2rem] border border-[#e3eee6] bg-white p-7 shadow-[0_16px_40px_rgba(13,43,24,0.055)] ${index === 1 ? "sm:mt-8" : ""}`}>
              <span className="text-sm font-bold text-[#f5a623]">0{index + 1}</span>
              <h3 className="mt-6 text-xl font-bold leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>{item.question}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
