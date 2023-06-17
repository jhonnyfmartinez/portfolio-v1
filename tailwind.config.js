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
        'pop-in': 'pop-in 0.6s ease-out 0s 1 normal forwards',
      },
      keyframes: {
        'pop-in': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
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
