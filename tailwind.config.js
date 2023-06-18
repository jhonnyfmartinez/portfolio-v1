const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
      text: 'rgb(var(--color-text) / <alpha-value>)',
      paper: 'rgb(var(--color-paper) / <alpha-value>)',
      background: 'rgb(var(--color-background) / <alpha-value>)',
      headings: 'rgb(var(--color-headings) / <alpha-value>)',
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['var(--font-arvo)', ...fontFamily.sans],
      mono: ['var(--font-scp)', ...fontFamily.mono],
    },
    extend: {
      animation: {
        'pop-in': 'pop-in 0.5s ease-out 0s 1 normal forwards',
        'fade-in-right': 'fade-in-right 0.4s ease-out 0s 1 normal forwards',
        'fade-in-bottom': 'fade-in-bottom 0.4s ease-out 0s 1 normal forwards',
        wobble: 'wobble 0.9s ease-in-out 0s 10 normal forwards',
      },
      keyframes: {
        wobble: {
          from: {
            transform: 'translate3d(0, 0, 0)',
          },
          '15%': {
            transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
          },
          '30%': {
            transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
          },
          '45%': {
            transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
          },
          '60%': {
            transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
          },
          '75%': {
            transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
          },
          'to ': {
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-right': {
          from: {
            opacity: 0,
            transform: 'translate3d(5%, 0, 0)',
          },
          to: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-bottom': {
          from: {
            opacity: 0,
            transform: 'translate3d(0, 5%, 0)',
          },
          to: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'pop-in': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      },
      transitionProperty: {
        top: 'top',
        left: 'left',
      },
    },
  },
  blocklist: ['blur'],
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': value => ({
            'animation-delay': value,
          }),
        },
        {
          values: theme('transitionDelay'),
        },
      );
    }),
  ],
};
