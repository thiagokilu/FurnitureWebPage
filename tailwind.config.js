/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ajuste conforme necessário
    theme: {
      extend: {
        colors: {
          darkGray: "#4B4B4B",
          mediumGray: "#3A3A3A",
          accent: "#FFAD4C",
          lightCream: "#f8f5ef",
          lightGray: "#F8F8F8",
        },
      },
    },
    plugins: [],
  };
  