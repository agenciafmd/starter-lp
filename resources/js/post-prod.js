const environment = require('./environment.js');

const fs = require('fs');

const indexHtmlPath = new URL(
    'file:///' + process.cwd() + '/public/index.html');

const manifestJsonPath = new URL(
    'file:///' + process.cwd() + '/public/manifest.json');

const filesPaths = [indexHtmlPath, manifestJsonPath];

filesPaths.forEach((value, index) => {

  fs.readFile(value, 'utf8', function (error, data) {

    if (error) {

      return console.log(error);
    }

    Object.entries(environment.postStrings).forEach(([key, value]) => {

      const pattern = new RegExp(`<!--fmd:${ key }-->`,'g');

      data = data.replace(
          pattern,
          value,
      );
    });

    fs.writeFile(value, data, 'utf-8', function (error) {

      if (error) {

        return console.log(error);
      }

      console.log('Post prod added to the public');
    });
  });
});
