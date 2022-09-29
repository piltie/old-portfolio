/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        JosefinSlab: "Josefin Slab",
        NotoSansMono: "Noto Sans Mono",
      },
      colors: {
        yellow: {
          "pastel-greenish": "#D6D5A8",
        },
        black: {
          pastel: "#1B2430",
        },
        blue: {
          "pastel-dark": "#495C83",
        },
        purple: {
          "pastel-medium": "#816797",
          "pastel-light": "#7A86B6",
          "pastel-dark": "#51557E",
        },
        lilac: {
          "pastel-light": "#A8A4CE",
        },
        pink: {
          "pastel-light": "#C8B6E2",
        },
        white: {
          "pastel-light": "#FEFBF3",
          "pastel-medium": "#F8EDE3",
        },
        brown: {
          "pastel-light": "#DFD3C3",
          "pastel-dark": "#8E806A",
          "pastel-medium": "#CDBBA7",
        },
      },
    },
  },
  plugins: [],
};
