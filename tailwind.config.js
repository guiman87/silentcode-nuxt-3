const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './assets/**/*.css',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    /* For A4 size */
    screens: {
      screen: { raw: 'screen' },
      print: { raw: 'print' },
    },
  },
  darkMode: 'class',
  variants: {},

  plugins: [],
}
