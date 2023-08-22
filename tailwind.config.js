/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'league': ['"League Spartan"', 'sans-serif'],
      },
      colors: {
        'biru': '#20435B',
        'kuning': '#FEF794',
      },
    },
  },
  plugins: [],
}