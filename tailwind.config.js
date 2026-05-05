/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a1f3c',
          800: '#0f2d52',
          700: '#15396a',
          600: '#1a4682',
        },
        ocean: {
          50:  '#eff6ff',
          400: '#2191db',
          500: '#1a7ac4',
          600: '#1565a8',
        },
        sand: {
          400: '#e8c56a',
          500: '#d4a843',
          600: '#b8892a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
