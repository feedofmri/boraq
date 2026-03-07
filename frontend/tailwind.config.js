/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        boraq: {
          cyan: '#00E5FF',
          dark: '#050A0F',
          light: '#F8FBFF',
        }
      },
      backgroundImage: {
        'dark-mesh': 'radial-gradient(at 80% 10%, rgba(0, 229, 255, 0.15) 0px, transparent 50%), radial-gradient(at 50% 0%, rgba(0, 229, 255, 0.1) 0px, transparent 50%), linear-gradient(180deg, #050A0F 0%, #020406 100%)',
        'light-mesh': 'radial-gradient(at 80% 10%, rgba(0, 229, 255, 0.2) 0px, transparent 50%), radial-gradient(at 10% 90%, rgba(230, 204, 255, 0.3) 0px, transparent 50%), linear-gradient(180deg, #F8FBFF 0%, #FFFFFF 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
