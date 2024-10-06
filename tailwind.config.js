/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'] // Set Inter as the default sans-serif font
    },
    extend: {
      colors: {
        primary: 'rgba(38, 103, 255, 1)'
      },
      opacity: {
        12: '.12'
      },
      boxShadow: {
        '3xl': '0 4px 50px 0 rgba(38, 103, 255, 0.15)'
      }
    }
  },
  plugins: []
}
