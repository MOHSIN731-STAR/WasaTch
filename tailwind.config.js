/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
  kantum: ['Kantumruy Pro','Playfair ', 'sans-serif'],
  playfair: ['Playfair Display', 'serif'],
},
    },
  },
  plugins: [],
}