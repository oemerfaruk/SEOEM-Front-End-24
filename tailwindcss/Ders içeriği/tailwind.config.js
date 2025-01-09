/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'danger': '#FF6363',
        'gRed':{
          100: '#FF0000',
          200: '#FF5555',
          300: '#FFBBBB',
        },
        'gBlue':{
          100: '#0000FF',
          200: '#5555FF',
          300: '#BBBBFF',
        }
      },
      spacing:{
        '13': '3.25rem',
        '15' : '3.75rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

