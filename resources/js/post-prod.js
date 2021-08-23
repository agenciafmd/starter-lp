const environment = require('./environment.js');
const fs = require('fs');

function generatePostProd(pages) {

  const hasPage = pages && !!pages.length;

  if (!hasPage) {

    return;
  }

  return new Promise((resolve, reject) => {

    const convertedPages = getFilePathsToApplyPostProd(pages);

    convertedPages.forEach((postProdItem) => {

      fs.readFile(postProdItem.pagePath, 'utf8', (error, data) => {

        if (error) {

          console.log(error);
          reject(error);
          return;
        }

        Object.entries(environment.postStrings).forEach(([key, value]) => {

          const pattern = new RegExp(`<!--fmd:${ key }-->`, 'g');

          data = data.replace(
              pattern,
              value,
          );
        });

        fs.writeFile(postProdItem.pagePath, data, 'utf-8', function (error) {

          if (error) {

            console.log(error);
            reject(error);
            return;
          }

          console.log(` --FMD--\n Post-Prod added to the page ${ postProdItem.namePage }.html in /public`);
          resolve(data);
        });
      });
    });
  })
}

function getFilePathsToApplyPostProd(pageOptions) {

  const relativePathPage = new URL(`file:///${ process.cwd() }/public/`);

  return pageOptions.map(item => ({
    pagePath: new URL(`${ relativePathPage }${ item.template }.html`),
    namePage: `${ item.template }`,
  }));

  /*
   FMD - Outra maneira de escrever o retorno acima.
   return pageOptions.map((item) => {
   return {
   pagePath: new URL(`${ relativePathPage }${ item.template }.html`),
   namePage: `${ item.template }`,
   }
   });
   */
}

module.exports = {

  generate: generatePostProd,
};
