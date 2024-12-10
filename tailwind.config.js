/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation:{
        'spin-slow': 'spin 20s linear infinite',
      },
      fontFamily: {
        poppins:['Nunito Sans', 'sans-serif']
      },
      colors:{
        primary:'#23304c'
      }
    },
  },
  plugins: [],
}

