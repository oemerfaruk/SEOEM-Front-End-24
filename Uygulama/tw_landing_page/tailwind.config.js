/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'seoem':{
          100: '#084B83',
          200: '#42BFDD',
          300: '#C2FF3D',
          400: '#FF9B42',
          500: '#D81E5B'
        }
      }
    },
  },
  plugins: [],
}

