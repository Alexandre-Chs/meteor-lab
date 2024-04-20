/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./imports/ui/*.html",
    "./client/*.html",
    "./imports/ui/*",
    "./imports/ui/*/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FDF7E4",
        secondary: "#FAEED1",
        tertiary: "#DED0B6",
        quaternary: "#BBAB8C",
      },
    },
  },
  plugins: [],
};
