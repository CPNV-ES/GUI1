const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
      extend: {
          colors: {
              white: '#F0F0F0',
              black: '#191919',
              main: '#F0F0F0',
              second: '#4DC591',
              third: '#EBEBEB',
              fourth: '#BCC1CD',
              mainDark: '#202225',
              secondDark: '#4DC591',
              thirdDark: '#2F3136',
              fourthDark: "#BCC1CD",
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
