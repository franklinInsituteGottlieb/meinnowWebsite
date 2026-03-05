"use client";

import { useState, useEffect } from "react";
import { buildTypeformUrl, type CourseContext, type TypeformUtmParams } from "@/lib/typeform-url";

const STORAGE_KEY = "course_context";
const ENTERED_VIA_UTM_KEY = "page_log_entered_via_utm";

const MEINNOW_COURSE_PARAMS_KEY = "meinnow_course_params";
const MEINNOW_UTM_SOURCE_FIXED = "website-cta__meinnow-course";
const MEINNOW_VISIT_FLAG = "meinnow_visit";

/** True, wenn die aktuelle URL Meinnow-UTM hat oder der Besuch zuvor mit Meinnow gestartet wurde (Session). */
function isFromMeinnow(): boolean {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  const utmSource = (params.get("utm_source") ?? "").toLowerCase();
  const utm = (params.get("utm") ?? "").toLowerCase();
  const urlHasMeinnow = utmSource.includes("meinnow") || utm.includes("meinnow");
  if (urlHasMeinnow) {
    sessionStorage.setItem(MEINNOW_VISIT_FLAG, "1");
    return true;
  }
  return sessionStorage.getItem(MEINNOW_VISIT_FLAG) === "1";
}

/**
 * Nur wenn UTM von Meinnow kommt: fester utm_source + ggf. meinnow_course_* aus sessionStorage (von /course).
 * Sonst leeres Objekt – dann werden keine UTM/Meinnow-Parameter an Typeform angehängt.
 */
function getMeinnowParamsForTypeform(): TypeformUtmParams {
  if (typeof window === "undefined" || !isFromMeinnow()) return {};
  const out: TypeformUtmParams = {
    utm_source: MEINNOW_UTM_SOURCE_FIXED,
  };
  try {
    const stored = sessionStorage.getItem(MEINNOW_COURSE_PARAMS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Record<string, string>;
      if (parsed.meinnow_course_id) out.meinnow_course_id = parsed.meinnow_course_id;
      if (parsed.meinnow_course_type) out.meinnow_course_type = parsed.meinnow_course_type;
      if (parsed.meinnow_course_duration) out.meinnow_course_duration = parsed.meinnow_course_duration;
    }
  } catch {
    // ignore
  }
  return out;
}

/** Typeform-URL: Nur bei Meinnow UTM Parameter durchreichen; sonst nur Basis-URL bzw. Course-Context. */
function getTypeformUrl(): string {
  const meinnowParams = typeof window !== "undefined" ? getMeinnowParamsForTypeform() : {};
  const hasMeinnowParams = Object.keys(meinnowParams).length > 0;

  if (hasMeinnowParams) {
    return buildTypeformUrl(undefined, meinnowParams);
  }
  if (typeof window === "undefined") return buildTypeformUrl();
  if (sessionStorage.getItem(ENTERED_VIA_UTM_KEY) !== "1") return buildTypeformUrl();
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const context = JSON.parse(stored) as CourseContext;
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
  const [href, setHref] = useState(buildTypeformUrl());

  useEffect(() => {
    setHref(getTypeformUrl());
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.open(getTypeformUrl(), "_blank", "noopener,noreferrer");
    onClick?.();
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
