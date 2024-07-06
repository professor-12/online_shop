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
        secondary: {
          darkBlue: "#141B34",
          purple: "#9DAEEA",
        },
        skyBlue: "#D9E0F8",
        darkStone: "#151414",
        gray:"#646464"
      }

    },
  },
  plugins: [],
};
export default config;

