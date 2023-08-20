/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Merienda: ['Merienda', "cursive"]
      },
      backgroundColor: ['active']
     
    },
  },
  plugins: [],
}

