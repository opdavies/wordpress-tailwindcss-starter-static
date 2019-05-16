const { variants } = require('tailwindcss/defaultConfig')
module.exports = {
  theme: {
    extend: {}
  },
  variants: {
    backgroundColor: [...variants.backgroundColor, 'focus']
  },
  plugins: []
}
