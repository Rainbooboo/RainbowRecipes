/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./components/**/*.{html,ts,}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "g": '#F0EBE1',
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero-pattern': "url('/assets/images/hero.png')",
      },
      colors: {
        customBg: '#F0EBE1',
        headerColor: 'rgba(240, 235, 225, 0.6)',
        borderOutline: '#c3beb5',
        main: '#262522',
        lightBrown: '#dfdbd2',
        peach: '#EE6352',
        heroText: '#F0EBE1',
        heroBtn: '#F29C33',
        blue: '#C4E5FC',
        blueLine: '#b3d0e4'
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Roboto', 'Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '17px': '17px',
        '20px': '20px',
        '22px': '22px',
        '28px': '28px',
        '32': '32px',
        '40': '40px',
        'xxs': '10px',
        '15': '15px',
        '80': '80px'
      },
      borderRadius: {
        'custom': '12px',
        'large': '40px',
      },
      lineHeight: {
        '200': '200px'
      },
    },
  },
  plugins: [],
}

