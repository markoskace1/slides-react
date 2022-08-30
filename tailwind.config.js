/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "metalic-blue": "#2D6475",
        "rus-violet": "#3C1641",
        "gold-yellow": "#ED9C1C",
        "aqua-md": "#64D3B0",
        "steel-blue-link": "#4797A7",
      },
      backgroundImage: {
        "ai-bg": "url('/src/components/images/ai-bg.jpg')",
      },
    },
  },
  plugins: [],
};
