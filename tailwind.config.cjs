/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#094bad",
        'blue':{
          1: '#337ab7',
          2: '#2e6da4',
        },
        'gray':{
          1: '#ccc',
          2: '#666',
          3:'#999',
          4:'rgba(51, 51, 51, 0.1)'
          
        } 
      },
      fontFamily: {
        'body': [" 'Poppins' ", 'sans-serif'],
      }
    },
  },
  plugins: []
    // require('/flowbite/plugin')],
};
