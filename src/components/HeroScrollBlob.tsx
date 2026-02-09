"use client";

import { useEffect, useState } from "react";

const SCROLL_START = 150;  // Blob beginnt zu wachsen
const SCROLL_END = 550;    // Schon hier komplett aufgegangen – bei „Wähle deinen Karriereweg“ weit offen
const SCALE_MIN = 1;
const SCALE_MAX = 15; // sehr groß – ganze Seite ist dann komplett blau
const TRANSLATE_Y_MAX = 40;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function HeroScrollBlob() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const y = typeof window !== "undefined" ? window.scrollY : 0;
      const progress = clamp((y - SCROLL_START) / (SCROLL_END - SCROLL_START), 0, 1);
      setScrollProgress(easeOutCubic(progress));
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scale = SCALE_MIN + (SCALE_MAX - SCALE_MIN) * scrollProgress;
  const translateY = TRANSLATE_Y_MAX * scrollProgress;

  // Hell (oben) → Dunkel (voll aufgegangen): für weiße Schrift auf dem Blob
  const r = Math.round(219 + (30 - 219) * scrollProgress);   // 219 → 30 (primary-dark)
  const g = Math.round(234 + (64 - 234) * scrollProgress);  // 234 → 64
  const b = Math.round(254 + (175 - 254) * scrollProgress); // 254 → 175
  const a = 0.4 + 0.55 * scrollProgress; // 0.4 → 0.95
  const backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  const isFullyOpen = scrollProgress >= 0.99;
  const blurClass = isFullyOpen ? "blur-0" : "blur-3xl";

  return (
    <div
      className={`absolute left-1/2 bottom-0 pointer-events-none -translate-x-1/2 w-[480px] h-[480px] rounded-full transition-all duration-300 ease-out ${blurClass}`}
      style={{
        transform: `translate(-50%, ${translateY}px) scale(${scale})`,
        transformOrigin: "50% 100%",
        backgroundColor,
      }}
      aria-hidden
    />
  );
}
