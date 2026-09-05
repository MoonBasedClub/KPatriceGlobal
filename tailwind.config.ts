import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101418",
        muted: "#5b6672",
        line: "#e4e7eb",
        surface: "#f7f8fa",
        brand: {
          DEFAULT: "#1f3a5f",
          soft: "#2f5586",
          accent: "#c8a24a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: { content: "68rem" },
    },
  },
  plugins: [],
} satisfies Config;
