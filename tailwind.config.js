/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  daisyui: {
    themes: ["emerald", "lght", "dark"],
  },
  plugins: [
    require("daisyui")
  ],
}

