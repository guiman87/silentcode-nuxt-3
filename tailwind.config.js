const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
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
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  darkMode: 'class',
  variants: {},

  plugins: [],
}
