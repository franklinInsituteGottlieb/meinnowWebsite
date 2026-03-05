"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import { PARTNER_LOGOS } from "@/config/partners.config";

export default function PartnerSection() {
  return (
    <section id="partner" className="relative py-24 scroll-mt-28" aria-labelledby="partner-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AnimateOnScroll animation="fadeUp" delay={0} replayWhenInView>
            <span className="block text-sm font-semibold uppercase tracking-widest text-primary">
              Kooperationen
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeUp" delay={120} replayWhenInView>
            <h2 id="partner-heading" className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              Unsere Partner
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeUp" delay={240} replayWhenInView>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground-light">
              Wir arbeiten mit starken Partnern zusammen – für Qualität und Reichweite unserer Weiterbildungen.
            </p>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll animation="fadeUp" delay={160} replayWhenInView>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10">
            {PARTNER_LOGOS.map((src) => (
              <div
                key={src}
                className="flex shrink-0 items-center justify-center h-10 sm:h-12"
                style={{ width: "clamp(100px, 14vw, 160px)" }}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-auto object-contain object-center max-w-full"
                  width={140}
                  height={48}
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
