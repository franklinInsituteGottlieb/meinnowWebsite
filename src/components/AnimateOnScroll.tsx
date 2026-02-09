"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType = "fadeUp" | "fadeIn" | "fadeLeft" | "scale" | "fadeUpStagger";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  /** Bei true: Animation spielt jedes Mal, wenn der Abschnitt ins Viewport kommt (z. B. Karriereweg „öffnen“). */
  replayWhenInView?: boolean;
}

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
  replayWhenInView = false,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        } else if (replayWhenInView) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, rootMargin, replayWhenInView]);

  return (
    <div
      ref={ref}
      className={`scroll-animate-${animation} ${isVisible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
