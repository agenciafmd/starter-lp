const fs = require('fs');

function generateCriticalCSS(pages) {

  const hasPage = pages && !!pages.length;

  if (!hasPage) {

    return;
  }

  return new Promise((resolve, reject) => {

    const convertedPages = getFilePathsToApplyCritical(pages);

    convertedPages.forEach((criticalItem) => {

      fs.readFile(criticalItem.pagePath, 'utf8', (error, data) => {

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
            criticalItem.criticalCssPath,
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

        fs.writeFile(criticalItem.pagePath, critical, 'utf-8', (error) => {

          if (error) {

            console.log(error);
            reject(error);
            return;
          }

          console.log(` --FMD--\n Critical-Path added to the Page ${ criticalItem.namePage } in /public`);
          resolve(data);
        });
      });
    });
  });
}

function getFilePathsToApplyCritical(pageOptions) {

  const relativePathCssCritical = `file:///${ process.cwd() }/public/css/critical/`;
  const relativePathPage = `file:///${ process.cwd() }/public/`;

  return pageOptions.map(item => ({
    criticalCssPath: new URL(`${ relativePathCssCritical }${ item.template }.css`),
    pagePath: new URL(`${ relativePathPage }${ item.template }.html`),
    namePage: `${ item.template }`,
  }));

  /*
   FMD - Outra maneira de escrever o retorno acima.
   return pageOptions.map((item) => {
   return {
   criticalCssPath: new URL(`${ relativePathCssCritical }${ item.template }.css`),
   pagePath: new URL(`${ relativePathPage }${ item.template }.html`),
   namePage: `${ item.template }`,
   }
   });
   */
}

module.exports = {

  generate: generateCriticalCSS,
};
