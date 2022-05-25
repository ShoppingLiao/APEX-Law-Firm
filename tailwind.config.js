const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      'paper': "url('/assets/bg.png')",
    },
    boxShadow: {
      DEFAULT: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      blue: {
        DEFAULT: '#00324d',
        darker: '#002b43',
      },
      yellow: {
        DEFAULT: '#ffe066',
        light: '#fffae6',
        darker: '#a66a27',
      },
      green: {
        DEFAULT: '#16A34A',
        light: 'rgba(22, 163, 74, 0.16)',
      },
      gray: {
        darkest: '#202020',
        dark: 'rgba(32, 32, 32, 0.72)',
        DEFAULT: '#888888',
        light: '#C4C4C4',
        lightest: '#f6f6f6',
      },
      red: {
        DEFAULT: '#FF2222',
        light: '#ffcccc',
      },
      pomegranate: '#E84713',
    },
    screens: {
      xs: '961px',
    },
    maxWidth: {
      'max-w-screen-xs': '960px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
