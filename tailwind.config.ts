import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0683F9",
          dark: "#0A5DB8",
        },
        secondary: "#FBA200",
      },
      fontFamily: {
        sans: ["var(--font-stack-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;