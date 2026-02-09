"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import { siteConfig } from "@/config/site.config";

export default function CtaSection() {
  return (
    <AnimateOnScroll
      animation="fadeUp"
      replayWhenInView
      threshold={0.05}
      rootMargin="0px 0px -80px 0px"
      className="cta-section-reveal"
    >
      <section
        id="kontakt"
        className="relative py-24 overflow-hidden rounded-t-3xl"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary-dark rounded-t-3xl" />

        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-t-3xl">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/5" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5" />
          <div className="absolute top-1/2 left-1/3 h-40 w-40 rounded-full bg-white/5" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          {siteConfig.cta.headline}
        </h2>
        <p className="mt-6 mx-auto max-w-2xl text-lg text-blue-100 leading-relaxed">
          {siteConfig.cta.subline}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.cta.buttonHref}
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            {siteConfig.cta.buttonText}
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
          <a
            href={`mailto:${siteConfig.footer.email}`}
            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
          >
            E-Mail schreiben
          </a>
        </div>
        <p className="mt-8 text-sm text-blue-200">
          Unverbindlich &amp; kostenlos – wir melden uns innerhalb von 24 Stunden.
        </p>
        </div>
      </section>
    </AnimateOnScroll>
  );
}
