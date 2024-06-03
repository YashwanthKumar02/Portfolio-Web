import { Opacity } from '@material-ui/icons';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      keyframes: {
        scrolling: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '40%': { transform: 'translateY(0%)', opacity: 1 },
          '50%': { transform: 'translateY(0%)', opacity: 1 },
          '60%': { transform: 'translateY(0%)', opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 0 },
        }
      },
      animation: {
        scrolling: 'scrolling 2.5s ease-out infinite'
      }
    },
  },
  plugins: [],
}

