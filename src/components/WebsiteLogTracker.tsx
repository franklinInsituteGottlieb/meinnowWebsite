"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SESSION_ID_KEY = "website_log_session_id";

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = sessionStorage.getItem(SESSION_ID_KEY);
  if (!id) {
    id = "w_" + Date.now() + "_" + Math.random().toString(36).slice(2, 11);
    sessionStorage.setItem(SESSION_ID_KEY, id);
  }
  return id;
}

function sendLog(payload: {
  type: string;
  pathname: string;
  search_query?: string;
  search_result_slug?: string;
  search_result_course_id?: string;
  click_href?: string;
  click_text?: string;
}) {
  const session_id = getOrCreateSessionId();
  fetch("/api/website-log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      received_at: new Date().toISOString(),
      session_id,
      type: payload.type,
      pathname: payload.pathname,
      search_query: payload.search_query ?? "",
      search_result_slug: payload.search_result_slug ?? "",
      search_result_course_id: payload.search_result_course_id ?? "",
      click_href: payload.click_href ?? "",
      click_text: payload.click_text ?? "",
    }),
  }).catch(() => {});
}

export default function WebsiteLogTracker() {
  const pathname = usePathname();
  const pageViewSentRef = useRef<string>("");

  useEffect(() => {
    if (!pathname) return;
    const key = pathname;
    if (pageViewSentRef.current === key) return;
    pageViewSentRef.current = key;
    sendLog({ type: "page_view", pathname });
  }, [pathname]);

  useEffect(() => {
    function handleSearch(e: CustomEvent<{ query: string; slug?: string; course_id?: string }>) {
      const d = e.detail;
      sendLog({
        type: "search",
        pathname: window.location.pathname,
        search_query: d?.query ?? "",
        search_result_slug: d?.slug ?? "",
        search_result_course_id: d?.course_id ?? "",
      });
    }
    window.addEventListener("website-log-search" as never, handleSearch as never);
    return () => window.removeEventListener("website-log-search" as never, handleSearch as never);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      const button = target.closest("button");
      const el = link ?? button;
      if (!el) return;
      const href = link?.getAttribute("href") ?? "";
      const text = (el.textContent ?? "").trim().slice(0, 200);
      if (!href && !text) return;
      sendLog({
        type: "click",
        pathname: window.location.pathname,
        click_href: href,
        click_text: text,
      });
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
