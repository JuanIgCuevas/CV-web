export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageAlt = "Juan Ignacio Cuevas, Desarrollador Full Stack";

export function SocialCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#0b111b",
        color: "#f5f7f2",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 430,
          height: 430,
          right: -100,
          top: -150,
          borderRadius: 999,
          background: "rgba(202, 255, 74, 0.12)",
          border: "1px solid rgba(202, 255, 74, 0.3)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 290,
          height: 290,
          right: 110,
          bottom: -190,
          transform: "rotate(45deg)",
          border: "1px solid rgba(126, 169, 218, 0.24)",
        }}
      />
      <div
        style={{
          width: 18,
          height: "100%",
          background: "#caff4a",
        }}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "62px 72px 58px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              width: 76,
              height: 76,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #caff4a",
              borderRadius: 18,
              color: "#caff4a",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            JC
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#9eb0c7",
              fontSize: 19,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Portfolio · 2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#caff4a", fontSize: 23, fontWeight: 700, marginBottom: 18 }}>
            DESARROLLADOR FULL STACK
          </div>
          <div style={{ fontSize: 67, fontWeight: 800, letterSpacing: "-3px", lineHeight: 1.02 }}>
            Juan Ignacio Cuevas
          </div>
          <div style={{ color: "#b8c4d2", fontSize: 28, marginTop: 22 }}>
            Soluciones web de punta a punta.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#9eb0c7", fontSize: 20 }}>
          <span>React</span>
          <span style={{ width: 8, height: 8, background: "#caff4a", transform: "rotate(45deg)" }} />
          <span>Supabase</span>
          <span style={{ width: 8, height: 8, background: "#caff4a", transform: "rotate(45deg)" }} />
          <span>SQL</span>
          <span style={{ width: 8, height: 8, background: "#caff4a", transform: "rotate(45deg)" }} />
          <span>Python</span>
          <span style={{ marginLeft: "auto", color: "#f5f7f2" }}>Tandil · Argentina</span>
        </div>
      </div>
    </div>
  );
}
