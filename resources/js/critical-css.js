const fs = require('fs');

function generateCriticalCSS(pages) {

  const hasPage = pages && !!pages.length;

  if (!hasPage) {

    return;
  }

  return new Promise((resolve, reject) => {

    const convertedPages = getFilePathsToApplyCritical(pages);

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

            const atRulesDeclarations = [
              'charset',
              'color-profile',
              'counter-style',
              'font-face',
              'font-feature-values',
              'import',
              'keyframes',
              'media',
              'namespace',
              'page',
              'property',
              'supports',
            ];

            let criticalCssAsString = fs.readFileSync(
                convertedPage.criticalCssPath,
                'utf-8',
            );

            atRulesDeclarations.forEach((atRulesItem) => {

              criticalCssAsString = criticalCssAsString.replace(
                  new RegExp(`@${atRulesItem}`, 'g'),
                  `@@${ atRulesItem }`,
              );
            });

            const critical = data.replace(
                new RegExp(`<!--fmd:criticalPath-->`, 'g'),
                `<style>${ criticalCssAsString }</style>`,
            );

            fs.writeFile(
                convertedPage.pagePath,
                critical,
                'utf-8', (error) => {

                  if (error) {

                    console.log(error);
                    reject(error);
                    return;
                  }

                  console.log(` --FMD Critical CSS-- \n Added to the page ${ convertedPage.pageName }.html in /public`);
                  resolve(data);
                },
            );
          },
      );
    });
  });
}

function getFilePathsToApplyCritical(pageOptions) {

  const relativePathCssCritical = `file:///${ process.cwd() }/public/css/critical/`;
  const relativePathPage = `file:///${ process.cwd() }/public/`;

  return pageOptions.map(pageOption => ({
    criticalCssPath: new URL(`${ relativePathCssCritical }${ pageOption.template }.css`),
    pagePath: new URL(`${ relativePathPage }${ pageOption.template }.html`),
    pageName: `${ pageOption.template }`,
  }));

  /*
   FMD - Outra maneira de escrever o retorno acima.
   return pageOptions.map((pageOption) => {
   return {
   criticalCssPath: new URL(`${ relativePathCssCritical }${ pageOption.template }.css`),
   pagePath: new URL(`${ relativePathPage }${ pageOption.template }.html`),
   pageName: `${ pageOption.template }`,
   }
   });
   */
}

module.exports = {

  generate: generateCriticalCSS,
};
