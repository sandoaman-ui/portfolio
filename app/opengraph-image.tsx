import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const alt = "Amanveer Singh Sando — Photography & Cinematography";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const logoBuffer = await readFile(
    path.join(process.cwd(), "public/logo-white.png")
  );
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

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
          background: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top rule */}
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

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          width={130}
          height={130}
          alt=""
          style={{ objectFit: "contain", marginBottom: 32 }}
        />

        {/* Gold divider */}
        <div
          style={{
            width: 48,
            height: 1,
            background: "#c9a97a",
            marginBottom: 28,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.35em",
            marginBottom: 12,
          }}
        >
          AMANVEER SINGH SANDO
        </div>

        {/* Discipline */}
        <div
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.22)",
            letterSpacing: "0.45em",
          }}
        >
          Photography&nbsp;&nbsp;·&nbsp;&nbsp;Cinematography
        </div>

        {/* Bottom rule */}
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
