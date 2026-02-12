import { NextResponse } from "next/server";

const WEBHOOK_URL = process.env.PAGE_LOGS_WEBHOOK_URL;

/**
 * POST /api/page-log
 * Proxy für Google Apps Script doPost – leitet Track-Events an das Sheet weiter.
 * Body: { action: 'track', brand, ts, session_id?, course_id?, meinnow_course_type?, meinnow_course_duration? }
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
      action: "track",
      route: "track",
      brand: body.brand ?? "meinnow",
      ts: body.ts ?? new Date().toISOString(),
      session_id: body.session_id ?? "",
      course_id: body.course_id ?? "",
      meinnow_course_type: body.meinnow_course_type ?? "",
      meinnow_course_duration: body.meinnow_course_duration ?? "",
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
    console.error("[page-log]", error);
    return NextResponse.json(
      { status: "error", message: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
