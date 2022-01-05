module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#6abb55',
        gray: {
          100: '#b3b3b3',
          200: '#808080',
          300: '#616161',
          400: '#4D4D4D',
          500: '#414141',
          600: '#282828',
          700: '#181818',
          800: '#121212',
          900: '#090909',
        },
      },
    },
  },
  plugins: [],
};
