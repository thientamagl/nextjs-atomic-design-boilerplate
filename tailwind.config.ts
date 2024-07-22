import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // breakpoints
      sm: { max: "575px" },
      md: { max: "767px" },
      lg: { max: "991px" },
      xl: { max: "1200px" },
      "2xl": { max: "1400px" },
    },
    fontFamily: {
      primary: ["var(--font-noto)"],
      roboto: ["var(--font-roboto)"],
    },
    colors: {
      transparent: "transparent",
      green: {
        "01": "#1A3636",
        "02": "#40534C",
        "03": "#677D6A",
      },
      beige: { "01": "#D6BD98" },
      white: { "01": "#FAFAFA" },
    },
    extend: {
      maxWidth: {
        "1200": "1200px",
      },
    },
  },
  plugins: [],
}
export default config
