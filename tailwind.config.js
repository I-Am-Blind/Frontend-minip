/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'mountain': "url('app_bg.jpg')"
      },
      colors :{
        'black' : '#1C1C1C',
       },
      fontFamily : {
        'main' : ['Urbanist' , 'sans-serif'],
      }
    },
  },
  plugins: [],
}

