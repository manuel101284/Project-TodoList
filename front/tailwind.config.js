/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightBlue': '#5AE0C7',
        'darkBlue': '#276156',
        'lightGreen': '#6AFDB7',
        'darkGreen': '#347D5A',
        'sand': '#F1FDBF',
        'light': '#a3a3a3',
        'dark': '#525252'
      },
      fontFamily: {
        Rubik: "'Rubik','sans-serif'"
      },
      backgroundImage: {
        'default': "url('/public/background.svg')"
      }
    },
    screens: {
      'sm': '425px',
      'md': '768px',
      'lg': '870px'
    }
  },
  plugins: [],
}
