import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Forward Education – Weiterbildung. Weiterkommen.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 50%, #60A5FA 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Forward Education
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: "rgba(255,255,255,0.85)",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Weiterbildung. Weiterkommen.
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            {["Künstliche Intelligenz", "Sales", "Projektmanagement"].map(
              (label) => (
                <div
                  key={label}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: 999,
                    padding: "12px 28px",
                    fontSize: 22,
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  {label}
                </div>
              )
            )}
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 20,
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
            }}
          >
            AZAV-zertifiziert · Bis zu 100 % gefördert mit Bildungsgutschein
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
