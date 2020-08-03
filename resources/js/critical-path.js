const fs = require('fs');

const criticalCssPath = new URL(
    'file:///' + process.cwd() + '/public/css/critical/index.css');
const criticalCssAsString = fs.readFileSync(criticalCssPath, 'utf8');
const indexHtmlPath = new URL(
    'file:///' + process.cwd() + '/public/index.html');

fs.readFile(indexHtmlPath, 'utf8', function (error, data) {

  if (error) {

    return console.log(error);
  }

  let critical = data.replace(
      '<!--fmd:criticalPath-->',
      `<style>${ criticalCssAsString }</style>`,
  );

  fs.writeFile(indexHtmlPath, critical, 'utf-8', function (error) {

    if (error) {

      return console.log(error);
    }

    console.log('Critical path added to the public');
  });
});
