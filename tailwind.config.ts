import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a2230",
        muted: "#5b6672",
        line: "#e4e7eb",
        surface: "#f7f8fa",
        // Sampled from the KPatrice Global Solutions logo: the orange, blue and
        // purple figures, and the navy of the tagline.
        brand: {
          DEFAULT: "#2E7FC1", // blue figure / "SOLUTIONS"
          soft: "#4A93CE",
          deep: "#1B4F86",
          orange: "#E36F22", // orange figure / "KPATRICE"
          purple: "#6A5FA9", // purple figure
          navy: "#2B3A55", // tagline text
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
