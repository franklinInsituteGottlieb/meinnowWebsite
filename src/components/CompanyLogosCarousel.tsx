"use client";

const COMPANY_LOGOS = [
  "/companies/Allianz Deutschland/Allianz Deutschland_Logo_0.svg",
  "/companies/Bosch/Bosch_idi5e7gC2E_0.svg",
  "/companies/CHECK24/CHECK24_idaK7ut65i_3.svg",
  "/companies/Deloitte/Deloitte_idXbysKEDR_1.svg",
  "/companies/Porsche/Porsche_Logo_0.svg",
  "/companies/Siemens/Siemens_id0if2F9r8_1.svg",
] as const;

export default function CompanyLogosCarousel() {
  return (
    <div className="mt-14 w-full">
      <p className="text-center text-sm font-semibold uppercase tracking-wider text-foreground-light mb-6">
        Unsere Teilnehmer arbeiten hier
      </p>
      <div className="relative overflow-hidden">
        <div className="company-logos-track flex w-max gap-12 items-center">
          {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((src, i) => {
            const isPorsche = src.includes("Porsche");
            return (
              <div
                key={`${src}-${i}`}
                className={`flex shrink-0 items-center justify-center [filter:brightness(0)] ${isPorsche ? "h-12" : "h-8"}`}
                style={{
                  width: isPorsche ? "clamp(140px, 18vw, 200px)" : "clamp(80px, 12vw, 140px)",
                  ...(isPorsche && { filter: "brightness(0) contrast(1.12)" }),
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-auto object-contain object-center"
                  width={isPorsche ? 180 : 120}
                  height={isPorsche ? 48 : 32}
                  aria-hidden
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
