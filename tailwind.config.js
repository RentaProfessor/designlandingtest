/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          100: '#F5F0EB',
          200: '#EAE3DC',
          300: '#DDD4C7',
          400: '#D5CAB7',
          500: '#C4B5A0',
          600: '#B8A899',
        },
        brown: {
          400: '#8B7762',
          500: '#6B5B4B',
          600: '#5A4A3A',
          700: '#4A3F35',
          800: '#3D3D3D',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

