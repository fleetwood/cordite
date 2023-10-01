/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rye: ['Rye', 'serif'],
        fraunces: ['Fraunces', 'serif'],
        'fraunces-italic': ['Fraunces-Italic', 'serif'],
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 6px 4px var(--tw-shadow-color)',
        xl: '0 4px 8px var(--tw-shadow-color)',
      },
      textGlow: {
        sm: '0 0px 2px var(--tw-shadow-color)',
        DEFAULT: '0 0px 4px var(--tw-shadow-color)',
        lg: '0 0px 8px var(--tw-shadow-color)',
        xl: '0 0px 12px var(--tw-shadow-color)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        corditeDark: {
          primary: '#A2A881',
          secondary: '#7A8538',
          accent: '#83781B',
          neutral: '#2b3440',
          'base-100': '#121212',
          info: '#2ACBCB',
          success: '#7AC465',
          warning: '#EDE556',
          error: '#781919',
        },
      },
      {
        corditeLight: {
          primary: '#584B4B',
          secondary: '#424143',
          accent: '#1081B4',
          neutral: '#372F2F',
          'base-100': '#D9D4D1',
          info: '#32C4C0',
          success: '#01b768',
          warning: '#FB8500',
          error: '#AD2325',
        },
      },
    ],
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-glow': (value) => ({
            textGlow: value,
          }),
        },
        { values: theme('textGlow') }
      )
    }),
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
  ],
}

