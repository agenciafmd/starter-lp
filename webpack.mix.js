const mix = require('laravel-mix');
require('laravel-mix-purgecss');
require('laravel-mix-criticalcss');
require('laravel-mix-webp');
const path = require('path');
let SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
let frontendImports = require('./resources/js/frontend-imports');
const dotenv = require('dotenv');
dotenv.config();
const environment = require('./resources/js/environment.js');
const criticalCss = require('./resources/js/critical-css');
const postProd = require('./resources/js/post-prod');

const httpRegex = 'http:\\/\\/|https:\\/\\/';
const projectProxy = environment.domain.replace(new RegExp(httpRegex), '');

/*
 * USAGE
 * <svg role="img">
 *   <use xlink:href="/svg/sprite.svg#050-santa-claus"></use>
 * </svg>
 * <svg role="img">
 *   <use xlink:href="/svg/sprite.svg#049-deer"></use>
 * </svg>
 * */
const wpConfig = {
  plugins: [
    new SVGSpritemapPlugin('resources/svg/sprite/*.svg', {
      output: {
        filename: 'public/svg/sprite.svg',
        svgo: {
          removeTitle: true,
        },
        chunk: {
          name: '../resources/js/spritemap',
        },
      },
      sprite: {
        prefix: false,
      },
    }),
  ],
};

mix
    .sass('resources/sass/frontend.scss', 'public/css')
    .purgeCss({
      extend: {
        content: [
          path.join(__dirname, 'resources/html/*.html'),
          path.join(__dirname, 'resources/js/**/*.js'),
          path.join(__dirname, 'node_modules/@fancyapps/fancybox/dist/*.js'),
          path.join(__dirname, 'node_modules/swiper/**/*.js'),
          path.join(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
          path.join(__dirname, 'node_modules/select2/dist/**/*.js'),
          path.join(__dirname, 'node_modules/sweetalert2/dist/*.js'),
          path.join(
              __dirname,
              'node_modules/bootstrap/dist/js/bootstrap.min.js',
          ),
        ],
        // Include classes we don't have direct access
        safelist: [/hs-*/, /fancybox-*/, /js-*/, /swiper-*/, /swal2-*/],
      },
    })
    .criticalCss({
      enabled: mix.inProduction(),
      paths: {
        base: `${ environment.domain }/`,
        templates: 'public/css/critical/',
        suffix: '',
      },
      urls: environment.pages,
      options: {
        minify: true,
      },
      dimensions: [
        {
          width: 375,
          height: 667,
        },
        {
          width: 1024,
          height: 768,
        },
        {
          width: 1280,
          height: 720,
        },
        {
          width: 1366,
          height: 768,
        },
        {
          width: 1920,
          height: 1080,
        },
      ],
      ignore: ['@font-face'],
    })
    .babel(frontendImports, 'public/js/frontend.js')
    .sourceMaps(false, 'source-map')
    .options({
      imgLoaderOptions: {
        enabled: true,
        gifsicle: {},
        mozjpeg: {
          quality: 85,
          progressive: true,
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: '85-90',
          speed: 4,
        },
        svgo: {},
      },
      processCssUrls: false,
    })
    .copy('resources/fonts', 'public/fonts')
    .ImageWebp({
      from: 'resources/images',
      to: 'resources/images',
      imageminWebpOptions: {
        quality: 95,
      },
    })
    .copy('resources/images/**', 'public/images')
    .copy('resources/svg/*.svg', 'public/svg')
    .copy([
      'resources/images/icons/favicon.ico',
      'resources/html/**',
    ], 'public')
    .browserSync({
      host: '192.168.10.10',
      proxy: projectProxy,
      open: false,
      files: [
        'public/css/**/*.css',
        'public/fonts/*',
        'public/images/*',
        'public/js/**/*.js',
        'public/svg/*',
        'public/*.html',
      ],
      watchOptions: {
        usePolling: true,
        interval: 500,
      },
    })
    .webpackConfig(wpConfig)
    .then(() => {

      if (mix.inProduction()) {

        postProd.generate(environment.pages)
                .then(() => {

                  criticalCss.generate(environment.pages);
                });
      }
    });
