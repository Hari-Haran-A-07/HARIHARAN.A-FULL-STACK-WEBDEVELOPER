import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#F5F5F5",
        brand: {
          black: "#000000",
          surface: "#0A0A0A",
          card: "#111111",
          elevated: "#171717",
          border: "#262626",
          purple: "#A100FF",
          purpleDeep: "#7C3AED",
          purpleLight: "#C084FC",
          purpleGlow: "rgba(161, 0, 255, 0.15)",
          grayMuted: "#6F6F6F",
          grayLight: "#A7A7A7",
          white: "#FFFFFF",
          offWhite: "#F5F5F5",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "purple-glow":
          "radial-gradient(circle at 50% 0%, rgba(161, 0, 255, 0.18) 0%, rgba(0, 0, 0, 0) 70%)",
        "grid-pattern":
          "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        "laser-sweep": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
        "laser-sweep": "laser-sweep 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
