"use client";

import { buildTypeformUrl, type MeinnowCourseContext } from "@/lib/typeform-url";

const STORAGE_KEY = "meinnow_course_context";
/** Nur wenn gesetzt: Nutzer kam von außen mit UTM Meinnow (nicht von Google). Dann UTM/Course an Typeform übergeben. */
const ENTERED_VIA_MEINNOW_UTM_KEY = "page_log_entered_via_meinnow_utm";

/** Typeform-URL: UTM/Course-Parameter nur, wenn Nutzer über UTM Meinnow gekommen ist; sonst nur Basis-URL. */
function getTypeformUrl(): string {
  if (typeof window === "undefined") return buildTypeformUrl();
  if (sessionStorage.getItem(ENTERED_VIA_MEINNOW_UTM_KEY) !== "1") return buildTypeformUrl();
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
