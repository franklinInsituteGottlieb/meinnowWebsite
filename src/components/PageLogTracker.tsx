"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SESSION_ID_KEY = "page_log_session_id";
const STORAGE_KEY = "course_context";
const ENTERED_VIA_UTM_KEY = "page_log_entered_via_utm";

/** UTM-Source ist forward-education oder website. */
function hasUtmInUrl(): boolean {
  if (typeof window === "undefined") return false;
  const utm = new URLSearchParams(window.location.search).get("utm_source") ?? "";
  const v = utm.toLowerCase();
  return v === "forward-education" || v === "website";
}

/** Referrer ist unsere eigene Seite (Navigation von innen). */
function isReferrerOurSite(): boolean {
  if (typeof window === "undefined") return false;
  const ref = document.referrer || "";
  if (!ref) return false;
  try {
    return new URL(ref).origin === window.location.origin;
  } catch {
    return false;
  }
}

/**
 * Tracking nur, wenn der Nutzer von außen mit UTM (forward-education/website) gekommen ist.
 * – Referrer = unsere Seite → nie Flag setzen; wenn Flag schon gesetzt ist, Session weiter tracken.
 * – Referrer = extern/leer + UTM in URL → Flag setzen, ab dann ganze Session in page_log.
 */
function shouldTrackPageLog(): boolean {
  if (typeof window === "undefined") return false;

  if (isReferrerOurSite()) {
    return sessionStorage.getItem(ENTERED_VIA_UTM_KEY) === "1";
  }

  if (hasUtmInUrl()) {
    sessionStorage.setItem(ENTERED_VIA_UTM_KEY, "1");
  }
  return sessionStorage.getItem(ENTERED_VIA_UTM_KEY) === "1";
}

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = sessionStorage.getItem(SESSION_ID_KEY);
  if (!id) {
    id = "s_" + Date.now() + "_" + Math.random().toString(36).slice(2, 11);
    sessionStorage.setItem(SESSION_ID_KEY, id);
  }
  return id;
}

function getCourseContext(): {
  course_id: string;
  course_type: string;
  course_duration: string;
} {
  if (typeof window === "undefined")
    return { course_id: "", course_type: "", course_duration: "" };
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return { course_id: "", course_type: "", course_duration: "" };
    const ctx = JSON.parse(raw) as {
      course_id?: string;
      course_type?: string;
      course_duration?: number;
    };
    return {
      course_id: ctx.course_id ?? "",
      course_type: String(ctx.course_type ?? ""),
      course_duration: String(ctx.course_duration ?? ""),
    };
  } catch {
    return { course_id: "", course_type: "", course_duration: "" };
  }
}

function getCourseIdFromUrl(): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  return params.get("course_id") ?? "";
}

export default function PageLogTracker() {
  const pathname = usePathname();
  const sentRef = useRef<string>("");

  useEffect(() => {
    if (!pathname) return;
    if (!shouldTrackPageLog()) return;

    const key = pathname + "|" + (typeof window !== "undefined" ? window.location.search : "");
    if (sentRef.current === key) return;
    sentRef.current = key;

    const session_id = getOrCreateSessionId();
    const url_course_id = getCourseIdFromUrl();
    const stored = getCourseContext();
    const course_id = url_course_id || stored.course_id;

    const payload = {
      action: "track",
      brand: "forward-education",
      ts: new Date().toISOString(),
      session_id,
      course_id,
      course_type: stored.course_type,
      course_duration: stored.course_duration,
    };

    fetch("/api/page-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  }, [pathname]);

  return null;
}
