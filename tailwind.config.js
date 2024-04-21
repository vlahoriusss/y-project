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
      },
      fontFamily: {
        primary:'Geist Variable'
      },

    },
  },
  plugins: [],
}

