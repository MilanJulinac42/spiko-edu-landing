import { ImageResponse } from "next/og";

export const alt = "Spiko Edu — Škola jezika za nemački i engleski";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0E1622",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 96,
              height: 96,
              borderRadius: 28,
              background: "#3E8FD0",
              fontSize: 54,
            }}
          >
            🌍
          </div>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 800 }}>
            <span style={{ color: "#86C440" }}>spiko</span>
            <span style={{ color: "#ffffff" }}>&nbsp;edu</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 56,
            fontSize: 66,
            fontWeight: 800,
            lineHeight: 1.15,
            width: 960,
          }}
        >
          Progovori samopouzdano na novom jeziku
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 28,
            fontSize: 34,
            color: "#A6C6E8",
          }}
        >
          Škola jezika za nemački i engleski
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 48 }}>
          {["Nemački", "Engleski", "Goethe · ÖSD", "IELTS · Cambridge"].map(
            (t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "12px 24px",
                  borderRadius: 999,
                  background: "rgba(134,196,64,0.15)",
                  color: "#86C440",
                  fontSize: 26,
                  fontWeight: 600,
                }}
              >
                {t}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
