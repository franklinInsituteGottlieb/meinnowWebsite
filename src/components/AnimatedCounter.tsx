"use client";

import { useEffect, useRef, useState } from "react";

/** Parst "100 %" → { number: 100, suffix: " %" }, "24 h" → { number: 24, suffix: " h" } */
function parseValue(value: string): { number: number; suffix: string } {
  const match = value.trim().match(/^(\d+)\s*(.*)$/);
  if (!match) return { number: 0, suffix: value };
  return { number: parseInt(match[1], 10), suffix: match[2] ? ` ${match[2]}` : "" };
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
  /** Wenn true, startet die Animation sofort (z.B. wenn die Section ins View kommt) */
  startAnimation?: boolean;
}

export default function AnimatedCounter({
  value,
  duration = 1400,
  className = "",
  startAnimation = false,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const { number: target, suffix } = parseValue(value);

  // Beim Verlassen des Viewports: zurücksetzen, damit Animation beim erneuten Scrollen neu startet
  useEffect(() => {
    if (!startAnimation) {
      setHasAnimated(false);
      setDisplayValue(0);
    }
  }, [startAnimation]);

  useEffect(() => {
    if (!startAnimation || hasAnimated) return;
    setHasAnimated(true);

    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = Math.round(eased * target);
      setDisplayValue(current);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [startAnimation, target, duration, hasAnimated]);

  return (
    <p className={className}>
      {displayValue}
      {suffix}
    </p>
  );
}
