/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./components/**/*.{html,ts,}"
  ],
  theme: {
    extend: {
      screens: {
        xSm: '100',
        xl: '1357px',
      },
      backgroundImage: {
        // "g": '#F0EBE1',
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero-pattern': "url('/assets/images/hero.png')",
        'footer': "url('/assets/images/footer.png')",
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
        blueLine: '#b3d0e4',
        cardBottomColor: '#fffbf2',
        cardOutline: 'rgba(38, 37, 34, 0.16)',
        lemon: '#9FDC26',
        modalGray: '#484743',
        textGray: '#858179',
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
        '15': '15px',
        '21': '21px',
        '26': '26px',
        '38': '38px',
        '40': '40px',
        '80': '80px',
      },
      borderRadius: {
        'custom': '12px',
        'md': '30px',
        'large': '40px',
      },
      lineHeight: {
        '200': '200px'
      },
    },
  },
  plugins: [],
}

