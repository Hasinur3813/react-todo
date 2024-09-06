/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      display: ["poppins", "sans-serif"],
    },
    extend: {
      colors: {
        pColor: "#3479d9",
        sColor: "#ebf2fc",
        gray: "#c2d8f6",
        darkMode: "#03122a",
        darkHover: "#061e45",
      },
    },
  },
  plugins: [],
};
