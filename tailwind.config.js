/** @type {import('tailwindcss').Config} */
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
  plugins: [require('daisyui')],
}

