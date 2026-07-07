import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Amanveer Singh Sando — Photography & Cinematography";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          background: "#000",
          fontFamily: "serif",
        }}
      >
        {/* Top gold rule */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 80,
            right: 80,
            height: 1,
            background: "rgba(201,169,122,0.3)",
          }}
        />

        {/* AS monogram */}
        <div
          style={{
            fontSize: 160,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: 32,
          }}
        >
          AS
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: 48,
            height: 1,
            background: "#c9a97a",
            marginBottom: 32,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          AMANVEER SINGH SANDO
        </div>

        {/* Discipline */}
        <div
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
          }}
        >
          Photography&nbsp;&nbsp;·&nbsp;&nbsp;Cinematography
        </div>

        {/* Bottom gold rule */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            height: 1,
            background: "rgba(201,169,122,0.3)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
