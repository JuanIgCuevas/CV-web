import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "#0b111b",
          border: "2px solid #caff4a",
          color: "#caff4a",
          fontFamily: "Arial, sans-serif",
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: "-0.6px",
        }}
      >
        JC
      </div>
    ),
    size,
  );
}
