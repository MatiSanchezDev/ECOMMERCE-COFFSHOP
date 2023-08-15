/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ecommers: ["Passion One"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
