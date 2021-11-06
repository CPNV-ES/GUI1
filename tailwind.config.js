const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
      extend: {
          colors: {
              white: '#BCC1CD',
              black: '#191919',
              main: '#F0F0F0',
              second: '#4DC591',
              third: '#EBEBEB',
              fourth: '#BCC1CD',
              mainDark: '#202225',
              secondDark: '#4DC591',
              thirdDark: '#2F3136',
              fourthDark: "#F0F0F0",
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
