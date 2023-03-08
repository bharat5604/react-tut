/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: { primary: "#007ABA", secondary: "#005C8C" },
      },
    },
  },
  plugins: [],
};
