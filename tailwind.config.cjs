/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vote.description': '#9695C8',
        'vote.link': '#8950fc',
        'qna.pink': '#ef168f',
        'qna.pink.bright': '#fff3f3',
        'service.icon.bg': '#d6d8fc',
      },
    },
  },
  plugins: [],
}
