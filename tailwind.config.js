/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      extend: {

        fontFamily:{
            aoboshi: ['Aoboshi One', 'sans-serif']

        },
          colors: {
              primary: {
                  DEFAULT: "#FCCE0B",
                  dark: "#DCB50E",
              },
              secondary: "#D84012",
          },
      },
  },
  plugins: [],
};
