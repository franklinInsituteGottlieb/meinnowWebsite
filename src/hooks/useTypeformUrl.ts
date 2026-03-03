"use client";

import { useState, useEffect, useCallback } from "react";
import { buildTypeformUrl, type CourseContext } from "@/lib/typeform-url";

const STORAGE_KEY = "course_context";
const ENTERED_VIA_UTM_KEY = "page_log_entered_via_utm";

export function useTypeformUrl(): string {
  const [url, setUrl] = useState(() => buildTypeformUrl());

  const updateUrl = useCallback(() => {
    if (typeof window === "undefined") {
      setUrl(buildTypeformUrl());
      return;
    }
    if (sessionStorage.getItem(ENTERED_VIA_UTM_KEY) !== "1") {
      setUrl(buildTypeformUrl());
      return;
    }
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        const context = JSON.parse(stored) as CourseContext;
        setUrl(buildTypeformUrl(context));
      } else {
        setUrl(buildTypeformUrl());
      }
    } catch {
      setUrl(buildTypeformUrl());
    }
  }, []);

  useEffect(() => {
    updateUrl();
    window.addEventListener("course-context-stored", updateUrl);
    return () => window.removeEventListener("course-context-stored", updateUrl);
  }, [updateUrl]);

  return url;
}
