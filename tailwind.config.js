/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  plugins: [require("tw-elements/dist/plugin.cjs"), require("flowbite/plugin")],
  darkMode: "class",
};
