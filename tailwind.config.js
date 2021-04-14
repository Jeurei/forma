const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./dist/*.html"],
  darkMode: false,
  theme: {
    screens: {
      sm: "320px",
      md: "720px",
      lg: "1170px",
    },

    container: {
      center: true,
    },

    minWidth: {
      sm: "320px",
      md: "720px",
      lg: "1170px",
      full: "100%",
      half: "50%",
      third: "33.33%",
      quater: "25%",
    },

    fontFamily: {
      main: ["Montserrat", "Arial", "sans-serif"],
      alt: ["Lora", "Arial", "sans-serif"],
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: "#6A7451",
      searchBg: "#FAE9DC",
      ocean: "rgba(222,236,234)",
      footerBg: "#333335",
    },

    extend: {},

    variants: {
      extend: {
        borderColor: ["focus-visible"],
        opacity: ["disabled"],
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
