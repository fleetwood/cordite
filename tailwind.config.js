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
          primary: '#BB9933',
          secondary: '#779911',
          accent: '#663399',
          neutral: '#334444',
          'base-100': '#121212',
          'base-200': '#242424',
          'base-300': '#363636',
          'base-content': '#999',
          info: '#77AADD',
          success: '#88BB66',
          warning: '#DD8822',
          error: '#882211',
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

