const mix = require('laravel-mix');

mix.js('src/js/script.js', 'dist')
    .sass('src/scss/main.scss', 'dist')
    .copy('src/images', 'dist/images')
    .setPublicPath('dist');