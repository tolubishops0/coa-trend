/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundColor: {
        bgColor: "#F6F7F8",
      },
      colors: {
        defaultColorText: "#072635",
        subTextColor: "#707070",
      },
      fontSize: {
        defaultText: "0.875rem",
        headerText: "1.5rem",
      },
      lineHeight: {
        lnHeight: "1.1875rem",
        headerHeight: "2.0625rem",
      },
    },
  },
  plugins: [],
};
