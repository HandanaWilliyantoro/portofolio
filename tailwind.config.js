/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "inter": ['"Inter"'],
      "poppins": ['"Poppins"'],
    },
    animation: {
      'ltr-linear-infinite': 'move-bg 100s linear infinite',
      'appear-fade': 'appear 2s linear',
      'appear-fade-title': 'appear 1s linear'
    },
    keyframes: {
      'move-bg': {
        '0%':   { 'background-position': 'left' },
        '50%': { 'background-position': 'right' },
        '100%': { 'background-position': 'left', 'webkit-transform': 'scaleX(-1);'}
      },
      'appear': {
        '0%': {'opacity': '0'},
        '100%': {'opacity': '100%'}
      }
    },
  },
  plugins: [],
}
