"use client";

import { useEffect, useState } from "react";

/* Hintergrund bleibt sichtbar bis weit nach CTA – kein plötzliches Weiß beim Scrollen */
const HIDE_ALL_AFTER = 4500;

export default function HeroFixedBackground() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function onScroll() {
      const y = typeof window !== "undefined" ? window.scrollY : 0;
      setVisible(y < HIDE_ALL_AFTER);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 hero-bg-gradient" />
      <div className="absolute inset-0 overflow-visible">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/35 blur-3xl hero-bg-float-1" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/40 blur-3xl hero-bg-float-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/28 blur-3xl hero-bg-float-3" />
        <div className="absolute top-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-violet-300/30 blur-3xl hero-bg-float-2" />
      </div>
    </div>
  );
}
