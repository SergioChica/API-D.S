/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        modal: 'modal 1s forwards',
        icon: 'icon 1s forwards',
       },
      keyframes: {
        modal: {
          '100%' : {opacity: '1'}
        },
        icon: {
          '0%': {top: '-20%'},
          '100%': {opacity: '1', top:'0' },
        },
      }
    },
  },
  plugins: [],
}