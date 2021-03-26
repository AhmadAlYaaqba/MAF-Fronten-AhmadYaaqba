module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-landing': "url('/images/heroImage-compressed.jpg')",
        'hero-gradient': 'linear-gradient(180deg, rgba(1, 22, 39, 0) 0%, #011627 76.64%, #011627 100%);',
      }),
      backgroundPosition: {
        'top-hero': 'center top -6rem',
      },
      colors: {
        turquoise: {
          50: '#edf9f9',
          100: '#d2f7f6',
          200: '#a1f1ea',
          300: '#63e6df',
          400: '#00c9e0',
          500: '#41EAD4',
          600: '#099c98',
          700: '#0e7f7a',
          800: '#11625e',
          900: '#104f4b',
        },
        body: {
          100: '#011627',
        },
      },
      fontFamily: {
        Playfair: 'playfair',
        'Larsseit-bold': 'Larsseit-bold',
        Larsseit: 'Larsseit',
      },
      fontSize: {
        '1md-l': '1.063rem',
      },
      inset: {
        '3p': '-3.87%',
        '19min': '-9%',
        '24min': '-12%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
