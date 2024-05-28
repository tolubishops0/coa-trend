/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bgColor: "#F6F7F8",
      },
      fontSize: {
        text: "14px",
      },
      lineHeight: {
        lnHeight: "19px",
      },
    },
  },
  plugins: [],
};
