/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        aoboshi: ['Aoboshi One', 'sans-serif'],
      },
      colors: {
        primary: '#DCB50E',
        secondary: '#D84012',
      },
    },
  },
  plugins: [],
};
