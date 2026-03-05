"use client";

import { COMPANY_LOGOS } from "@/config/partners.config";

export default function CompanyLogosCarousel() {
  return (
    <div className="mt-14 w-full">
      <p className="text-center text-sm font-semibold uppercase tracking-wider text-foreground-light mb-6">
        Unsere Teilnehmer arbeiten hier
      </p>
      <div className="relative overflow-hidden">
        <div className="company-logos-track flex w-max gap-12 items-center">
          {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="flex shrink-0 items-center justify-center h-8 [filter:brightness(0)]"
                style={{ width: "clamp(80px, 12vw, 140px)" }}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-auto object-contain object-center"
                  width={120}
                  height={32}
                  aria-hidden
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
