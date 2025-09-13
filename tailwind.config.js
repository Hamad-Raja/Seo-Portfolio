/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4CAF50',
          dark: '#2E7D32',
          light: '#81C784'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
}
