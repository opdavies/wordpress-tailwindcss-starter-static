const mix = require('laravel-mix')
const glob = require('glob-all')

require('laravel-mix-purgecss')

mix.disableNotifications()
 .postCss('src/css/app.css', 'dist/css', [
    require('tailwindcss')(),
    require('postcss-nested')()
  ])
 .purgeCss({
    paths: () => glob.sync([
      path.join(__dirname, 'index.html'),
    ]),
 })
  // .browserSync({
  //   proxy: 'localhost:8001',
  //   // files: ['dist/css/app.css', 'index.html__'],
  //   open: false,
  //   notify: false
  // })
