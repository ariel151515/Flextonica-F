/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'overlay-black': 'rgba(0, 0, 0, 0.3)',
        'grisBtn':'rgba(50, 48, 48, 1)',
        'grisTextoBtn':'rgba(188, 186, 186, 1)',
        'grisTextoPortada': 'rgba(154, 154, 154, 1)',
        'darkModeGrIsOscu':'rgba(21, 23, 36, 1)',
        'darkModeGrisClar':'#fff',
        'grisClar':'#73767D',

        'amarillo': 'rgba(248, 211, 71, 1)',
        'azulPrimario':'rgba(16, 126, 255, 1)',
        'azulSecundario':'rgba(204, 227, 255, 1)',
        'grisBase':'rgba(217, 217, 217, 1)',
        'grisClaro':'rgba(246, 246, 247, 1)',
        'grisOscuro':'rgba(149, 141, 141, 1)'
      },
    },
  },
  plugins: [],
}

