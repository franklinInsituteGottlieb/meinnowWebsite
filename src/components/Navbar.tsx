"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import TypeformLink from "@/components/TypeformLink";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(typeof window !== "undefined" ? window.scrollY > 80 : false);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (pathname !== "/") return;
    const targetId = href.replace(/.*#/, "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <nav
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ease-out ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-slate-200/50"
            : "bg-white/45 backdrop-blur-xl shadow-lg shadow-black/5 border-white/40"
        }`}
      >
        <div className="relative flex h-20 items-center justify-between px-5 sm:px-6 lg:px-8 py-1">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} Logo`}
              width={280}
              height={82}
              className="h-12 w-auto object-contain md:h-14"
              priority
            />
          </a>

          {/* Desktop Links – SEO: /#anchor, smooth scroll auf Homepage */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {siteConfig.nav.links.map((link) =>
              pathname === "/" ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA – wie Hero-Button (rounded-full, gleicher Schatten) */}
          <div className="hidden md:flex items-center shrink-0">
            <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-[15px] font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5">
              {siteConfig.nav.ctaText}
            </TypeformLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/30 transition-colors"
            aria-label="Menü öffnen"
          >
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu – gleiche Glas-Optik */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/40 py-4 px-5 space-y-1 rounded-b-2xl bg-white/20 backdrop-blur-sm">
            {siteConfig.nav.links.map((link) =>
              pathname === "/" ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block rounded-xl py-3 px-4 text-lg font-semibold text-foreground hover:text-primary hover:bg-white/30 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl py-3 px-4 text-lg font-semibold text-foreground hover:text-primary hover:bg-white/30 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
            <TypeformLink
              className="mt-2 block w-full text-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {siteConfig.nav.ctaText}
            </TypeformLink>
          </div>
        )}
      </nav>
    </header>
  );
}
