import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #FFF7FB 0%, #FFE4EC 50%, #FBCFE8 100%)",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Decorative Glow */}
        <div
          style={{
            position: "absolute",
            width: 450,
            height: 450,
            borderRadius: "999px",
            background: "#F9A8D4",
            opacity: 0.25,
            top: -120,
            right: -80,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
            width: "100%",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#DB2777",
              marginBottom: 18,
            }}
          >
            Shreengar
          </div>

          <div
            style={{
              fontSize: 34,
              color: "#374151",
              marginBottom: 36,
            }}
          >
            Makeup Studio
          </div>

          <div
            style={{
              fontSize: 28,
              color: "#6B7280",
              maxWidth: 760,
              lineHeight: 1.4,
            }}
          >
            Bridal • Engagement • Reception • Party Makeup
          </div>

          <div
            style={{
              marginTop: 50,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "#EC4899",
                color: "#fff",
                padding: "16px 34px",
                borderRadius: 999,
                fontSize: 26,
                fontWeight: 600,
              }}
            >
              Beauty • Elegance • Confidence
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}