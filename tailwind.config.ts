import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2c3345",
        muted: "#5b6672",
        line: "#e4e7eb",
        surface: "#f5f5f5",
        // Sampled from the KPatrice Global Solutions logo: the orange, blue and
        // purple figures, and the navy of the tagline.
        // Sampled from the live site's stylesheet.
        brand: {
          DEFAULT: "#188bf6", // primary buttons / links
          soft: "#0f74d4",    // hover shade of the above
          ink: "#2c3345",     // headings and dark sections
          orange: "#cc6906",  // logo orange
          purple: "#554c9b",  // logo purple
          sky: "#4184c4",
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
