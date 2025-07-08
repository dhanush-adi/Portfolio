/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'maga': ['Maga', 'sans-serif'],
        'schelter': ['Schelter Grotesk NF', 'sans-serif'],
        'martin': ['Martin', 'sans-serif'],
        'saans': ['Saans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};