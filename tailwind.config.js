/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'nsans-light':['nsans Light'],
        'nsans-md':['nsans Medium'],
        'nsans-bold':['nsans Bold']
      }
    },
  },
  plugins: [],
}

