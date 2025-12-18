/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FDFCF8',
          100: '#F7F5F0',
          200: '#EBE7DF',
        },
        forest: {
          800: '#1A3C34',
          900: '#0F2922',
        },
        terra: {
          500: '#C16E4C',
          600: '#A65D3F',
        },
        sand: {
          300: '#D6CEC3',
          400: '#C2B8AA',
        }
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'widest-xl': '0.2em',
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}