module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-texture': ".bg-gradient-to-bl",
        'footer-texture': ".bg-gradient-to-bl",
      }),
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    },
  },
  variants: {
    fontFamily: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}