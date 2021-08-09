const mix = require('laravel-mix');
require('laravel-mix-purgecss');
require('laravel-mix-criticalcss');
const path = require('path');
let SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
let frontendImports = require('./resources/js/frontend-imports');
const environment = require('./resources/js/environment.js');
const criticalPath = require('./resources/js/critical-path');
const postProd = require('./resources/js/post-prod');

const httpRegex = 'http:\\/\\/|https:\\/\\/';
const projectProxy = environment.domain.replace(new RegExp(httpRegex), '');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .sass('resources/sass/frontend.scss', 'public/css')
    .purgeCss({
      // enabled: mix.inProduction(),
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
        safelist: [/hs-*/, /tns-*/, /js-*/, /swiper-*/],
      },
    })
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
    .copy('resources/images/**', 'public/images')
    .copy([
      'resources/images/icons/favicon.ico',
      'resources/html/**',
    ], 'public')
    .babel(frontendImports, 'public/js/frontend.js')
    .criticalCss({
      enabled: mix.inProduction(),
      paths: {
        base: 'http://' + environment.domain,
        templates: 'public/css/critical/',
        suffix: '',
      },
      urls: environment.pages,
      dimensions: [
        { width: 375, height: 667 },
        { width: 1024, height: 768 },
        { width: 1280, height: 720 },
        { width: 1366, height: 768 },
        { width: 1920, height: 1080 },
      ],
      ignore: ['@font-face'],
    })
    .then(() => {

      if (mix.inProduction()) {

        postProd.generate(environment.pages)
                .then(() => {

                  criticalPath.generate(environment.pages);
                });
      }
    });

/*
 * USAGE
 * <svg role="img">
 *   <use xlink:href="/svg/sprite.svg#050-santa-claus"/>
 * </svg>
 * <svg role="img">
 *   <use xlink:href="/svg/sprite.svg#049-deer"/>
 * </svg>
 * */
const wpConfig = {
  plugins: [
    new SVGSpritemapPlugin('resources/svg/*.svg', {
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

if (!mix.inProduction()) {
  wpConfig.devtool = 'source-map';
  mix.sourceMaps();
}

mix.webpackConfig(wpConfig);

/*
 |--------------------------------------------------------------------------
 | BrowserSync
 |--------------------------------------------------------------------------
 */
mix.browserSync({
  host: '192.168.10.10',
  proxy: projectProxy,
  open: false,
  files: [
    'resources/html/**/*.html',
    'resources/js/**/*.js',
    'resources/sass/**/*.scss',
    'resources/svg/**/*.svg',
    // 'public/js/**/*.js',
    // 'public/css/**/*.css',
    // 'public/*.html',
  ],
  watchOptions: {
    usePolling: true,
    interval: 500,
  },
});

