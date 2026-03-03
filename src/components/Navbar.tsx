"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import { featuredStandorte } from "@/config/standorte.config";
import TypeformLink from "@/components/TypeformLink";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [standorteOpen, setStandorteOpen] = useState(false);
  const [mobileStandorteOpen, setMobileStandorteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setStandorteOpen(false);
      }
    }
    if (standorteOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [standorteOpen]);

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
        className={`mx-auto max-w-6xl rounded-2xl border ${scrolled
            ? "bg-white shadow-lg shadow-black/5 border-slate-200"
            : "bg-white shadow-lg shadow-black/5 border-slate-200"
          }`}
      >
        <div className="relative flex h-20 items-center justify-between px-5 sm:px-6 lg:px-8 py-1">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt={`${siteConfig.seoBrand} Logo`}
              width={280}
              height={82}
              className="h-12 w-auto object-contain md:h-14"
              priority
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {siteConfig.nav.links.map((link) => {
              const isAnchor = link.href.startsWith("/#");
              const isStandorte = link.href === "/standorte";
              const isActive = !isAnchor && pathname.startsWith(link.href);

              if (isStandorte) {
                return (
                  <div key={link.href} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setStandorteOpen(!standorteOpen)}
                      className={`flex items-center gap-1 text-lg font-semibold hover:text-primary ${isActive ? "text-primary" : "text-foreground"}`}
                      aria-expanded={standorteOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${standorteOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {standorteOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 pt-2">
                        <div className="rounded-2xl bg-white shadow-lg border border-slate-200 py-2 min-w-[200px]">
                          {featuredStandorte.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/standorte/${s.slug}`}
                              onClick={() => setStandorteOpen(false)}
                              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary"
                            >
                              {s.name}
                            </Link>
                          ))}
                          <div className="border-t border-slate-100 mt-2 pt-2">
                            <TypeformLink
                              onClick={() => setStandorteOpen(false)}
                              className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10"
                            >
                              Jetzt beraten lassen →
                            </TypeformLink>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (isAnchor && pathname === "/") {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-lg font-semibold text-foreground hover:text-primary"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-semibold hover:text-primary ${isActive ? "text-primary" : "text-foreground"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA – wie Hero-Button (rounded-full, gleicher Schatten) */}
          <div className="hidden md:flex items-center shrink-0">
            <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-[15px] font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark">
              {siteConfig.nav.ctaText}
            </TypeformLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-slate-100"
            aria-label="Menü öffnen"
          >
            <span
              className={`block h-0.5 w-5 bg-foreground ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu – gleiche Glas-Optik */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 px-5 space-y-1 rounded-b-2xl bg-white">
            {siteConfig.nav.links.map((link) => {
              const isAnchor = link.href.startsWith("/#");
              const isStandorte = link.href === "/standorte";
              const isActive = !isAnchor && pathname.startsWith(link.href);

              if (isStandorte) {
                return (
                  <div key={link.href}>
                    <button
                      type="button"
                      onClick={() => setMobileStandorteOpen(!mobileStandorteOpen)}
                      className={`flex items-center justify-between w-full rounded-xl py-3 px-4 text-lg font-semibold hover:bg-slate-100 ${isActive ? "text-primary" : "text-foreground"}`}
                    >
                      {link.label}
                      <svg
                        className={`h-5 w-5 transition-transform ${mobileStandorteOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {mobileStandorteOpen && (
                      <div className="pl-4 mt-1 space-y-0.5 border-l-2 border-primary/30 ml-4">
                        {featuredStandorte.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/standorte/${s.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-base font-medium text-foreground hover:text-primary"
                          >
                            {s.name}
                          </Link>
                        ))}
                        <TypeformLink
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-base font-semibold text-primary"
                        >
                          Jetzt beraten lassen →
                        </TypeformLink>
                      </div>
                    )}
                  </div>
                );
              }

              if (isAnchor && pathname === "/") {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block rounded-xl py-3 px-4 text-lg font-semibold text-foreground hover:text-primary hover:bg-slate-100"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl py-3 px-4 text-lg font-semibold hover:text-primary hover:bg-slate-100 ${isActive ? "text-primary" : "text-foreground"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <TypeformLink
              className="mt-2 block w-full text-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark"
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
