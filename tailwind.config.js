const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      satoshi: ['Roboto', 'sans-serif'],
    },
    screens: defaultTheme.screens,
    extend: {
      colors: Object.assign({}, colors, {
        'background-secondary': {
          100: '#6d6d6d',
          200: '#595959',
          300: '#454545',
          400: '#313131',
          500: '#1D1D1D',
          600: '#090909',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        light: {
          100: '#ffffff',
          200: '#ffffff',
          300: '#ecf0f6',
          400: '#d8dce2',
          500: '#C4C8CE',
          600: '#b0b4ba',
          700: '#9ca0a6',
          800: '#888c92',
          900: '#74787e',
        },
        surface: {
          100: '#686868',
          200: '#545454',
          300: '#404040',
          400: '#2c2c2c',
          500: '#181818',
          600: '#040404',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        muted: {
          100: '#c8c8d5',
          200: '#b4b4c1',
          300: '#a0a0ad',
          400: '#8c8c99',
          500: '#787885',
          600: '#646471',
          700: '#50505d',
          800: '#3c3c49',
          900: '#282835',
        },
        background: {
          100: '#626262',
          200: '#4e4e4e',
          300: '#3a3a3a',
          400: '#262626',
          500: '#121212',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        primary: {
          100: '#9d9aff',
          200: '#8986f4',
          300: '#7572e0',
          400: '#615ecc',
          500: '#4D4AB8',
          600: '#3936a4',
          700: '#252290',
          800: '#110e7c',
          900: '#000068',
        },
      }),
      fontSize: {
        ssm: '0.75rem',
        xxs: '0.75rem',
      },
      zIndex: {
        'sidebar-trigger': '1000',
        sidebar: '1001',
        modal: '1002',
        dropdown: '1003',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
