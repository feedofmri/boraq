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
          black: '#020607',
          white: '#FFFFFF',
          // Cyan & Teal Accents
          teal: {
            deep: '#032F38',
            slate: '#2F555F',
            muted: '#587E88',
            steel: '#82A9B4',
            light: '#AFD7E2',
          },
          // Neutral Grays
          gray: {
            charcoal: '#313334',
            mid: '#5E6161',
            lightmid: '#909393',
            silver: '#C5C8C8',
          },
          // Pastel Glows
          pastel: {
            cyan: '#C1EFED',
            wash: '#D7F3F4',
            lavender: '#EBDFEB',
            ice: '#D7E5F0',
            frost: '#FDFEFE',
          }
        }
      },
      backgroundImage: {
        'boraq-dark': 'linear-gradient(180deg, #020607 0%, #010304 100%)',
        'boraq-light': 'linear-gradient(180deg, #FFFFFF 0%, #FDFEFE 100%)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      }
    },
  },
  plugins: [],
}
