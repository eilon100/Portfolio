/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: { xs: '480px' },
      colors: { main: '#f7ab0a', secondary: 'rgb(107 114 128)' },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
