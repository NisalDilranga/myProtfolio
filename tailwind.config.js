/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#ed1212",
        "neone-green":"#00FF66",
        "dark_primary": "#06223F",
        "bg_light_primary": "#F5F9FD",
        "gray": "#B7C5D3",
      },
    },
  },
  plugins: [],
  darkMode:'class'
});
