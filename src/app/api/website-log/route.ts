import { NextResponse } from "next/server";

const WEBHOOK_URL = process.env.PAGE_LOGS_WEBHOOK_URL;

/**
 * POST /api/website-log
 * Proxy für internes Website-Logging (Klicks, Suchen, Seitenaufrufe) → Google Sheet "website_logs".
 */
export async function POST(request: Request) {
  if (!WEBHOOK_URL) {
    return NextResponse.json(
      { status: "error", message: "PAGE_LOGS_WEBHOOK_URL not configured" },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const payload = {
      action: "website_log",
      received_at: body.received_at ?? new Date().toISOString(),
      session_id: body.session_id ?? "",
      type: body.type ?? "",
      pathname: body.pathname ?? "",
      search_query: body.search_query ?? "",
      search_result_slug: body.search_result_slug ?? "",
      search_result_course_id: body.search_result_course_id ?? "",
      click_href: body.click_href ?? "",
      click_text: body.click_text ?? "",
    };

    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    if (!res.ok) {
      return NextResponse.json(
        { status: "error", message: text || res.statusText },
        { status: 502 }
      );
    }
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text };
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("[website-log]", error);
    return NextResponse.json(
      { status: "error", message: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
