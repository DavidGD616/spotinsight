/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

