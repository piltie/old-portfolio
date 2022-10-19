/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        JosefinSlab: "Josefin Slab",
        JosefinSans: "Josefin Sans",
      },
      screens: {
        "project-img": { max: "1024px" },
        "footer-sm": { max: "380px" },
        "menu-md": { min: "892px" },
      },
      colors: {
        white: {
          "pastel-light": "#fffefd",
          "pastel-medium": "#f7f5f2",
          default: "#ffffff",
        },
        brown: {
          "pastel-light": "#DFD3C3",
          "pastel-dark": "#7b6d57",
          "pastel-darkest": "#826F66",
          "pastel-medium": "#CDBBA7",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
