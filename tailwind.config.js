import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          soft: '#111111',
          raised: '#171717',
        },
        gold: {
          DEFAULT: '#C9A24B',
          light: '#E6CB84',
          dark: '#9C7A2E',
        },
        bone: '#F4F0E6',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', ...defaultTheme.fontFamily.sans],
        display: ['"Playfair Display Variable"', '"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
