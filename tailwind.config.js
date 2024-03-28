/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'orange': '#e28625',
      'green': '#006671',
      'dark': '#004140',
      'offwhite': 'rgba(255,255,255,0.75)',
      'white': '#fff',
      'offwhitebg':'#f2f2f2',
      'orange1': '#e28625',
    },
    fontFamily> {
      'shoulders': "Big Shoulders Display",
      'lexend':"Lexend Deca"
    }
  },
  plugins: [],
}