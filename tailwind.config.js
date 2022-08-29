/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', './index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14B8A6',
        dark: '#1C1917',
        secondry: '#64748b',
        darkmode: '#0F172A',
        darkp: '#94A3B8',
      },
      fontFamily: {
        inter: ['Inter'],
        viga: ['Viga'],
      },
      screens: {
        '2xl': '1280px',
      },
      scale: {
        '175': '1.75',
      },
    },
  },
  plugins: [],
};
