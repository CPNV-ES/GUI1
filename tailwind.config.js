const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
      extend: {
          colors: {
              main: colors.white,
              second: '#4DC591',
              third: '#F6F6F5',
              fourth: '#BCC1CD',
              mainDark: '#202225',
              secondDark: '#4DC591',
              thirdDark: '#2F3136',
              fourthDark: colors.white,
          }
      },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  plugins: [],
}
