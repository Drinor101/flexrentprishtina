/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2A66',
          dark: '#0A2A66',
          light: '#12408C',
          accent: '#1E5BD7',
        },
      },
    },
  },
  plugins: [],
};
