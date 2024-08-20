/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            fontFamily: {
                aoboshi: ["Aoboshi One", "sans-serif"],
            },
            colors: {
                primary: "#DCB50E",
                secondary: "#D84012",
            },
        },
    },
    plugins: [],
};
