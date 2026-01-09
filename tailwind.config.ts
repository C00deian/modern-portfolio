
const config = {
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a', // Dark charcoal from video
        accent: '#ff4d4d',     // The reddish-orange "Hello I'm" pill
        secondary: '#f5f5f5',  // Off-white for section backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or 'Sora' for a more premium look
      },
    },
  },
}/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
      },
    },
  },
  plugins: [],
};
