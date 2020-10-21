module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      'sans': "",
      'display': ['Gilroy', 'sans-serif'],
      'body': ['Graphik', 'sans-serif'],
    },  
    boxShadow: {
      outline: '0 0 0 3px rgba(0, 0, 0, 0.5)',
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '120': '30rem',
        '144': '36rem',
      },
      opacity: {
        '85': '0.85',
      },
    }
  },
  variants: {
    fontFamily: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}