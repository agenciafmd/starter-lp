const environment = require('./environment.js');
const fs = require('fs');

function generatePostProd(pages) {

  const hasPage = pages && !!pages.length;

  if (!hasPage) {

    return;
  }

  return new Promise((resolve, reject) => {

    const convertedPages = getFilePathsToApplyPostProd(pages);

    convertedPages.forEach((convertedPage) => {

      fs.readFile(
          convertedPage.pagePath,
          'utf8',
          (error, data) => {

            if (error) {

              console.log(error);
              reject(error);
              return;
            }

            Object.entries(environment.postStrings)
                  .forEach(([key, value]) => {

                    const pattern = new RegExp(`<!--fmd:${ key }-->`, 'g');

                    data = data.replace(
                        pattern,
                        value,
                    );
                  });

            fs.writeFile(
                convertedPage.pagePath,
                data,
                'utf-8',
                function (error) {

                  if (error) {

                    console.log(error);
                    reject(error);
                    return;
                  }

                  console.log(` --FMD Post Prod-- \n Added to the page ${ convertedPage.pageName }.html in /public`);
                  resolve(data);
                },
            );
          },
      );
    });
  });
}

function getFilePathsToApplyPostProd(pageOptions) {

  const relativePathPage = new URL(`file:///${ process.cwd() }/public/`);

  return pageOptions.map(pageOption => ({
    pagePath: new URL(`${ relativePathPage }${ pageOption.template }.html`),
    pageName: `${ pageOption.template }`,
  }));

  /*
   FMD - Outra maneira de escrever o retorno acima.
   return pageOptions.map((pageOption) => {
   return {
   pagePath: new URL(`${ relativePathPage }${ pageOption.template }.html`),
   pageName: `${ pageOption.template }`,
   }
   });
   */
}

module.exports = {

  generate: generatePostProd,
};
