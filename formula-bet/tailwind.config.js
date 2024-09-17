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
      transparent: '#FFFFFF00',

      primary_gray: '#555555',
      header_gray: '#434141',
      red_pink: '#FF5252',
      light_gray: '#747474'
    }
  },
  plugins: [],
}
