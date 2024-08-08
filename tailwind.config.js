/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          600: '1A1A1A',
          700: '0D0D0D',
        }
      },
    },
  },
  plugins: [],
}