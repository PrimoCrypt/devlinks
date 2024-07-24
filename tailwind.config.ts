import { Limelight } from "next/font/google";
import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#633CFF",
          active: "#BEADFF",
          disabled: "#EFEBFF",
        },
        grey: {
          dark: "#333333",
          medium: "#737373",
          light: "#D9D9D9",
          verylight: "#FAFAFA",
        },
        whitesmoke: "#EEEEEE",
        red:{
          default: "#FF3939",
        }
      },
      fontFamily:{
        primary: "instrument-sans"
      }
    },
  },
  plugins: [daisyui],
};
export default config;
