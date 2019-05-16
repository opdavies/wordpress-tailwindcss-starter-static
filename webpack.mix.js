const mix = require('laravel-mix')

mix.disableNotifications()
 .postCss('src/css/app.css', 'dist/css', [
    require('tailwindcss')(),
    require('postcss-nested')()
  ])
  // .browserSync({
  //   proxy: 'localhost:8001',
  //   // files: ['dist/css/app.css', 'index.html__'],
  //   open: false,
  //   notify: false
  // })
