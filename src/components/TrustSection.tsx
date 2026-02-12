"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site.config";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function TrustSection() {
  const { certificates, awards, stats } = siteConfig.trust;
  const statsRef = useRef<HTMLDivElement>(null);
  const [isStatsInView, setIsStatsInView] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsStatsInView(entries[0].isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Zertifikate-Leiste – nur wenn Einträge vorhanden */}
        {certificates.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {certificates.map((cert) => (
              <div
                key={cert}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-sm border border-slate-100"
              >
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        )}

        {/* Auszeichnungen */}
        {awards.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            {awards.map((award) => (
              <div key={award.name} className="text-center">
                <p className="font-bold text-foreground">{award.name}</p>
                {award.subtitle && <p className="text-sm text-foreground-light">{award.subtitle}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Kennzahlen – Count-up und Einblendung erst beim Scroll-ins-View */}
        <div
          ref={statsRef}
          className={`transition-opacity duration-500 ${isStatsInView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Wir in Zahlen</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter
                value={stat.value}
                duration={1400}
                startAnimation={isStatsInView}
                className="text-3xl sm:text-4xl font-bold text-primary"
              />
              <p className="text-foreground-light mt-1">{stat.label}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
