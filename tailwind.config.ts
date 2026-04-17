import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#1a1a1a",
        accent: "#c5a46d",
        accentGold: "#e8c892",
        dark: "#050505",
        lightGray: "#e5e5e5",
        premium: {
          bg: "#0a0a0b",
          surface: "#121214",
          line: "#2a2a30",
          ink: "#f5f5f5",
          muted: "#b3b3b8",
          accent: "#c5a46d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        premium: "0 20px 60px rgba(23, 23, 23, 0.12)",
        "premium-soft": "0 12px 30px rgba(23, 23, 23, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
