/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
          conthrax: ['Conthrax', 'sans-serif'], // Add this line
          helveticaNeueMedium: ['HelveticaNeueMedium', 'sans-serif'], // New font
        },
      },
    },
  plugins: [],
}