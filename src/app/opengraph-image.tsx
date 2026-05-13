import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = siteConfig.ogAlt;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(circle at 24% 20%, rgba(98, 214, 199, 0.24), transparent 30%), linear-gradient(135deg, #07080b 0%, #10131b 46%, #08090d 100%)",
          color: "#f7f7f2",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Inter, Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              alignItems: "center",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              borderRadius: "16px",
              display: "flex",
              fontSize: 34,
              fontWeight: 700,
              height: "72px",
              justifyContent: "center",
              width: "72px",
            }}
          >
            A
          </div>
          <div
            style={{
              border: "1px solid rgba(98, 214, 199, 0.36)",
              borderRadius: "999px",
              color: "#62d6c7",
              fontSize: 24,
              padding: "14px 22px",
            }}
          >
            v1 platform
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ color: "#62d6c7", fontSize: 32, fontWeight: 700 }}>almicsen</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 86,
              fontWeight: 760,
              letterSpacing: 0,
              lineHeight: 0.95,
            }}
          >
            <span>Creative digital things.</span>
            <span>Not a template.</span>
          </div>
          <div style={{ color: "#b6bac7", fontSize: 30, lineHeight: 1.35, maxWidth: "820px" }}>
            Projects, writing, experiments, media wrappers, and the occasional questionable Easter
            egg.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
