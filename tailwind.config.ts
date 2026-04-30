import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#05070A",
        panel: "#0B0F17",
        panelAlt: "#111827",
        line: "rgba(148, 163, 184, 0.18)",
        ink: "#F8FAFC",
        muted: "#94A3B8",
        accent: "#7DD3FC",
        accentStrong: "#818CF8",
        accentSoft: "#34D399",
      },
      boxShadow: {
        halo: "0 0 0 1px rgba(125, 211, 252, 0.08), 0 18px 80px rgba(2, 8, 23, 0.45)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(to right, rgba(148, 163, 184, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.05) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};

export default config;

