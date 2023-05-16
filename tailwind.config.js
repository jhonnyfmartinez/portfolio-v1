const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

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
    extend: {},
  },
  plugins: [],
};
