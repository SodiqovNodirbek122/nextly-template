const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: {
          100: "#CECDD6",
          200: "#9F9FAC",
          300: "#737386",
          400: "#4B4C61",
          500: "#363753",
          600: "#363753",
          700: "#363753",
          800: "#363753",
          900: "#363753",
        },
        voltiva: {
          100: "#C7EFDA",
          200: "#91DDB6",
          300: "#61CE95",
          400: "#39BC74",
          500: "#12B76A",
          600: "#12B76A",
          700: "#12B76A",
          800: "#12B76A",
          900: "#12B76A",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
