/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [" ./index.html",
    "./src/**/*.{css,js}",],
  theme: {
    extend: {
      backgroundImage: {
        "01": "url('./img/karolina-gra.jpg')",
      },

      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'custom': ['"NomeDaFonte"', 'serif'], // Para fontes personalizadas
      },


    },

    
  },
  plugins: [],
}

