/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#3B3044',
        customGold: '#3E4238',
        customBg: "0D0D0D",
        customLike: '#1B1B1B'
      },
      fontFamily: {
        primary:'Geist Variable',
        'agrandir': ['Agrandir'],
      },

    },
  },
  plugins: [],
}

