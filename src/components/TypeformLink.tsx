"use client";

import { buildTypeformUrl, type MeinnowCourseContext } from "@/lib/typeform-url";

const STORAGE_KEY = "meinnow_course_context";

/** Liest aktuellen Kurs-Kontext aus sessionStorage und baut Typeform-URL mit UTM/Course-Parametern. */
function getTypeformUrl(): string {
  if (typeof window === "undefined") return buildTypeformUrl();
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const context = JSON.parse(stored) as MeinnowCourseContext;
      return buildTypeformUrl(context);
    }
  } catch {
    // ignore
  }
  return buildTypeformUrl();
}

interface TypeformLinkProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function TypeformLink({ className, children, onClick }: TypeformLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.open(getTypeformUrl(), "_blank", "noopener,noreferrer");
    onClick?.();
  }

  return (
    <a
      href={buildTypeformUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
