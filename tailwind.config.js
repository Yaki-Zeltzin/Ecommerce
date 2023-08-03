/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
      200: '78rem'
    },
    width:{
      20: '6rem'
    }
  },
},
  plugins: [],
}

