/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F3A',
          navyDark: '#071324',
          navyLight: '#142E54',
          blue: '#2563EB',
          blueHover: '#1D4ED8',
          blueLight: '#EFF6FF',
          accent: '#38BDF8',
          gold: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 31, 58, 0.08)',
        'card-hover': '0 12px 32px -4px rgba(11, 31, 58, 0.16)',
        'premium': '0 20px 40px -15px rgba(11, 31, 58, 0.25)',
      }
    },
  },
  plugins: [],
}
