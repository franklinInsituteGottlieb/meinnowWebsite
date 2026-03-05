"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TypeformLink from "@/components/TypeformLink";
import { siteConfig } from "@/config/site.config";

export default function CtaSection() {
  return (
    <AnimateOnScroll
      animation="fadeUp"
      threshold={0.08}
      rootMargin="0px 0px -60px 0px"
      className="cta-section-reveal"
    >
      <section
        id="kontakt"
        className="relative py-24 overflow-hidden rounded-t-3xl scroll-mt-28"
      >
        {/* Base gradient – tiefer, satter */}
        <div
          className="absolute inset-0 rounded-t-3xl"
          style={{
            background:
              "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 25%, #3b82f6 50%, #2563eb 75%, #1e40af 100%)",
          }}
        />
        {/* Weiche Licht-Orbs für Tiefe */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-t-3xl">
          <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[380px] w-[380px] rounded-full bg-blue-300/25 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-indigo-200/20 blur-2xl" />
        </div>
        {/* Dezentes Raster für Struktur */}
        <div
          className="absolute inset-0 rounded-t-3xl opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          {siteConfig.cta.headline}
        </h2>
        <p className="mt-6 mx-auto max-w-2xl text-lg text-blue-100 leading-relaxed">
          {siteConfig.cta.subline}
        </p>
        <div className="mt-10 flex justify-center">
          <TypeformLink className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-slate-50 transition-colors">
            Jetzt beraten lassen
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
          </TypeformLink>
        </div>
        <p className="mt-8 text-sm text-blue-200">
          Unverbindlich &amp; kostenlos – wir melden uns innerhalb von 24 Stunden.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/standorte" className="text-blue-200 hover:text-white underline underline-offset-2">
            Standorte
          </Link>
          <Link href="/ratgeber" className="text-blue-200 hover:text-white underline underline-offset-2">
            Ratgeber
          </Link>
          <Link href="/#kurse" className="text-blue-200 hover:text-white underline underline-offset-2">
            Kurse
          </Link>
        </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}
