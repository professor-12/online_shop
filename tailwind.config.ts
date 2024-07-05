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
        },
        skyBlue: "#D9E0F8",
        darkStone:"#151414",
        
      }

    },
  },
  plugins: [],
};
export default config;


// background: linear-gradient(90deg, #FB6969 0%, #B91D1D 100%);
