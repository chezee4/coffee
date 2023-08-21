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
      backgroundColor: ['active'],
      boxShadow: {
        'customShadow': '5px 5px 20px rgba(0, 0, 0, 0.26)',
        'inputSearchShadow':"0px 0px 4px rgba(0, 0, 0, 0.4)",
        'inputSearchShadowHover': "0px 0px 10px rgba(0, 0, 0, 0.4)",
        'buttonShadow': "4px 4px 20px 0px rgba(0, 0, 0, 0.25)"
         
      },
    },
  },
  plugins: [],
}

