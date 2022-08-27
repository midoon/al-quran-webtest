/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#37AC5D",
        secondary: "#172542",
      },
    },
  },
  plugins: [require("daisyui")],
};
