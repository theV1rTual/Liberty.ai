/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'button-color': '#39B7CB',
        'container-bg-color': '#303030',
        'active-tab-color': '#37E4FF',
        'li-color': '#0095AC',
        'border-color': '#01414A'
      }
    },
  },
  plugins: [],
}

