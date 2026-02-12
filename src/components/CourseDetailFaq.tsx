"use client";

import { useState } from "react";
import type { FaqItemConfig } from "@/config/site.config";

export default function CourseDetailFaq({ items }: { items: FaqItemConfig[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl bg-white/45 backdrop-blur-xl shadow-md border border-white/40 overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-foreground hover:bg-slate-50/50 transition-colors"
            aria-expanded={openIndex === index}
            aria-controls={`course-faq-${index}`}
            id={`course-faq-q-${index}`}
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
            id={`course-faq-${index}`}
            role="region"
            aria-labelledby={`course-faq-q-${index}`}
            className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
          >
            <div className="px-6 pb-4 pt-0 text-foreground-light leading-relaxed border-t border-slate-100">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
