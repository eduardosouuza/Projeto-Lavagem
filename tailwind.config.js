/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af',
          dark: '#1e3a8a',
        },
        secondary: {
          DEFAULT: '#dc2626',
          dark: '#b91c1c',
        },
      },
    },
  },
  plugins: [],
};