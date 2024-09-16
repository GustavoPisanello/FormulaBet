/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },

    colors: {
      white: '#FFF',
      black: '#000',

      primary_gray: '#555555',
      header_gray: '#434141',
      red_pink: '#FF5252',
    }
  },
  plugins: [],
}
