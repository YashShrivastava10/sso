import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "11": "11px",
        "12": "12px",
        "13": "13px",
        "14": "14px",
        "17": "17px",
        "3xl": "28px"
      },
      colors: {
        primary: "#1c1c22",
        grey: "#272727",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        }
      }
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)"
    }
  },
  plugins: [],
};
export default config;
