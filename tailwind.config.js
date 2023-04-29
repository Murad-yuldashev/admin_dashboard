/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        'borderC': '#F4F4F4'
      },
      backgroundColor: {
        'BackWhite': '#fff',
        'Gray': '#C0C0C0'
      }
    },
  },
  plugins: [],
}

