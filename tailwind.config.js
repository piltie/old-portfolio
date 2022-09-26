/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
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
      },
    },
  },
  plugins: [],
};
