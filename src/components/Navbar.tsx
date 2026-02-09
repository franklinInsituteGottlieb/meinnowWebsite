"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <nav className="mx-auto max-w-7xl rounded-3xl bg-white/75 backdrop-blur-xl shadow-xl shadow-black/5 border border-white/40">
        <div className="relative flex h-24 items-center justify-between px-5 sm:px-6 lg:px-8 py-1">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} Logo`}
              width={280}
              height={82}
              className="h-16 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Links – zentriert */}
          <div className="hidden md:flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
            {siteConfig.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button – rechts */}
          <div className="hidden md:flex items-center">
            <a
              href={siteConfig.nav.ctaHref}
              className="cta-animate inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-primary-dark hover:scale-105 transition-colors"
            >
              {siteConfig.nav.ctaText}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menü öffnen"
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/40 py-4 px-5 space-y-3 rounded-b-3xl">
            {siteConfig.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-2.5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.nav.ctaHref}
              onClick={() => setMobileOpen(false)}
              className="cta-animate block w-full text-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              {siteConfig.nav.ctaText}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
