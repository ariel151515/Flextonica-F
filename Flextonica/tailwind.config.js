/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'overlay-black': 'rgba(0, 0, 0, 0.3)',
        'amarillo': 'rgba(248, 211, 71, 1)',
        'grisBtn':'rgba(50, 48, 48, 1)',
        'grisTextoBtn':'rgba(188, 186, 186, 1)',
        'grisTextoPortada': 'rgba(154, 154, 154, 1)'
      },
    },
  },
  plugins: [],
}

