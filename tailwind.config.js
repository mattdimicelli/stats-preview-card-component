module.exports = {
  mode: 'jit',
  purge: [
    './dist/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'very-dark-blue-for-bg': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue-for-card-bg': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'white-heading-and-stats': 'hsl(0, 0%, 100%)',
        'white-main-par': 'hsla(0, 0%, 100%, 0.75)',
        'white-stat-headings': 'hsla(0, 0%, 100%, 0.6)',
      }
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'Lexend Deca': ['Lexend Deca', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
