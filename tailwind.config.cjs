/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#094bad",
        'blue':{
          1: '#337ab7',
          2: '#2e6da4'
        },
        'gray':{
          1: '#ccc',
          
        } 
      },
    },
  },
  plugins: [],
};
