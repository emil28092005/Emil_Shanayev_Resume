/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./layouts/**/*.html', './content/**/*.md', './assets/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#112d44',
        dark: {
          100: '#0f172a',
          200: '#1e293b',
          300: '#334155',
          400: '#475569',
          500: '#607d8b',
          600: '#304ffe',
          700: '#24368a',
          800: '#1d2951',
          900: '#132743',
        },
        bg: {
          default: '#ffffff',
          primary: '#0f172a',
        },
      },
      spacing: {
        '5': '1.25rem',
        '7': '1.75rem',
        '9': '2.25rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
