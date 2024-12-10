/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dance: {
          from: { height: '10px' },
          to: { height: '100%' },
        },
      },
      animation: {
        dance: 'dance 400ms linear infinite alternate',
      },
      colors: {
        'green': '#1DB954',
      },
      borderRadius: {
        'subtle' : '4px',
        'pill' : '30px'
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('current', '&.active');
  })
  ],
}

