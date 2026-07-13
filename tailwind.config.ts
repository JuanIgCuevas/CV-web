import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        accentSoft: "var(--accent-soft)",
        border: "var(--border)",
      },
      boxShadow: {
        glow: "0 24px 80px -32px rgba(206, 167, 90, 0.45)",
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at center, rgba(255,255,255,0.08) 0, rgba(255,255,255,0) 58%), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
