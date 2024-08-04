/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'overlay-black': 'rgba(0, 0, 0, 0.3)',
        'amarillo': 'rgba(248, 211, 71, 1)',
        'grisBtn':'rgba(50, 48, 48, 1)',
        'grisTextoBtn':'rgba(188, 186, 186, 1)',
        'grisTextoPortada': 'rgba(154, 154, 154, 1)',
        'darkModeGrIsOscu':'rgba(21, 23, 36, 1)',
        'darkModeGrisClar':'#fff',
        'grisClar':'#73767D'
      },
    },
  },
  plugins: [],
}

