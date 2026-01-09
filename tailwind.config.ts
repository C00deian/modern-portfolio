import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)", "sans-serif"],
      },
      colors: {
        background: '#1a1a1a', 
        accent: '#ff4d4d',     
        secondary: '#f5f5f5',  
      },
    },
  },
  plugins: [],
};

export default config;