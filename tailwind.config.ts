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
        md: {
          primary: "#D0BCFF",
          "on-primary": "#381E72",
          "primary-container": "#4F378B",
          "on-primary-container": "#EADDFF",
          surface: "#141218",
          "surface-container": "#1D1B20",
          "on-surface": "#E6E1E5",
          "on-surface-variant": "#CAC4D0",
          "outline-variant": "#49454F",
        },
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
