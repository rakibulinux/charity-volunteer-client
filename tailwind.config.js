/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          950: "#C30047",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
