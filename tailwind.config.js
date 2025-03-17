/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#f5efff",
        mainText: "#441752",
        secondText: "#883747",
        darkMainBg: "#10002b",
        darkMainText: "#ff6500",
        darkSecondText: "#1e3e62",
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Urbanist", "sans-serif"], // Added Urbanist font
      },
    },
  },
  plugins: [],
  darkMode: "class",
});
