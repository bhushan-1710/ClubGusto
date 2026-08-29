import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FAF7F2",
          100: "#F4EFEA",
          200: "#EAE2D7",
          300: "#DDD1C2",
          400: "#C9BAA6",
        },
        charcoal: {
          950: "#0D0B0A",
          900: "#141211",
          800: "#1C1917",
          700: "#292524",
          600: "#44403C",
          500: "#57534E",
          400: "#78716C",
          300: "#A8A29E",
        },
        brass: {
          DEFAULT: "#C5A059",
          light: "#D8B878",
          dark: "#9E7B35",
          hairline: "rgba(197, 160, 89, 0.25)",
          subtle: "rgba(197, 160, 89, 0.08)",
        },
        terracotta: {
          DEFAULT: "#9E5B42",
          light: "#B8745A",
          dark: "#7D4530",
          subtle: "rgba(158, 91, 66, 0.08)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.16em",
        subtle: "0.06em",
      },
      maxWidth: {
        site: "1320px",
      },
    },
  },
  plugins: [],
};
export default config;
