const fs = require('fs');
const minify = require('html-minifier').minify;

const indexHtmlPath = new URL(
    'file:///' + process.cwd() + '/public/index.html');

fs.readFile(indexHtmlPath, 'utf8', function (error, data) {

  if (error) {

    return console.log(error);
  }

  // remove o browser sync
  data = data.replace(/<script id="__bs_script__">([\s\S]*?)<\/script>/g, '');

  // minifica geral com regras que não vão deixar explodir tudo
  data = minify(data, {
    collapseWhitespace: true,
    minifyJS: true,
    minifyCSS: true,
    removeAttributeQuotes: true,
    removeComments: true,
  });

  fs.writeFile(indexHtmlPath, data, 'utf-8', function (error) {

    if (error) {

      return console.log(error);
    }

    console.log('Minify HTML added to the public');
  });
});
