import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        'primary': "#3d309f",
        'secondary': {
          'DEFAULT': 'white',
          'HOVER': '#4536B4',
          'button': {
            'DEFAULT': '#30267D',
            'HOVER': '#241C5E',
          },
          '50': '#eef1ff',
          '100': '#e0e5ff',
          '200': '#c7cffe',
          '300': '#a6affb',
          '400': '#8286f7',
          '500': '#6964f0',
          '600': '#5947e4',
          '700': '#4c39c9',
          '800': '#3d309f',
          '900': '#372f80',
          '950': '#211b4b',
        },
      }
    },
  },

  plugins: [
    require("@tailwindcss/typography"), 
    animations,
  ],
};
