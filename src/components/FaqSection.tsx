"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site.config";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 scroll-mt-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary mb-2">
          Häufige Fragen
        </p>
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-foreground mb-12">
          FAQ
        </h2>

        <div className="space-y-3">
          {siteConfig.faq.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white shadow-md border border-white/60 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-foreground hover:bg-slate-50/50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                {item.question}
                <svg
                  className={`h-5 w-5 shrink-0 text-primary transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
              >
                <div className="px-6 pb-4 pt-0 text-foreground-light leading-relaxed border-t border-slate-100">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
