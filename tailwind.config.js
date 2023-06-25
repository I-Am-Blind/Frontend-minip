/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'mountain': "url('app_bg.jpg')"
      },
      colors :{
        'black' : '#3A3A3A',
       },
      fontFamily : {
        'main' : ['Urbanist' , 'sans-serif'],
      }
    },
  },
  plugins: [],
}

