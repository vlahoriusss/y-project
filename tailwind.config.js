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
        customGreen: '#2F3732',
        customGold: '#323327',
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

