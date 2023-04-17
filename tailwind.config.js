/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
         Darkcyan: '#3c8067',
         Cream: '#f2ebe3',
          Verydarkblue: '#1c232b',
           Darkgrayishblue: '#6c7289',
           White: '#ffffff',
       
       
      },
      fontFamily: {
        Fraunces: ['Fraunces', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif'] 
      }
    }
  },
  plugins: [],
}
