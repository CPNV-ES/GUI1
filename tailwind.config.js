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
        fourthDark: '#F0F0F0'
      },
      keyframes: {
        fade: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        fade: 'fade 0.5s ease-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
    }
  },
  fontFamily: {
    sans: ['Roboto', 'sans-serif']
  },
  variants: {
    extend: {
      display: ['dark']
    }
  },
  plugins: []
}
