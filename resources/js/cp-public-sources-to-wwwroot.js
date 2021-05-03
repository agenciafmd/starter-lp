const environment = require('./environment.js');
const fse = require('fs-extra');

if (!environment.folder) {

  console.error(`Por favor, verifique no arquivo enviroment.js se o nome da pasta (propriedade folder) está preenchido de acordo com a estrutura do projeto dotnet`);
  return;
}

getSourceFilesDictionary().forEach((dictionaryItem) => {

  console.log(`de ${ dictionaryItem.source } para ${ dictionaryItem.destination } copiado`);
  fse.copySync(
      dictionaryItem.source,
      dictionaryItem.destination,
  );
});

function getSourceFilesDictionary() {

  return [
    {
      source: 'public/css',
      destination: `${ environment.folder }/wwwroot/css`,
    },
    {
      source: 'public/fonts',
      destination: `${ environment.folder }/wwwroot/fonts`,
    },
    {
      source: 'public/images',
      destination: `${ environment.folder }/wwwroot/images`,
    },
    {
      source: 'public/js',
      destination: `${ environment.folder }/wwwroot/js`,
    },
    {
      source: 'public/svg',
      destination: `${ environment.folder }/wwwroot/svg`,
    },
    {
      source: 'public/favicon.ico',
      destination: `${ environment.folder }/wwwroot/favicon.ico`,
    },
    /*{
     source: 'public/index.html',
     destination: `${ environment.folder }/views/Home/Index.cshtml`
     },*/
    {
      source: 'public/pdf',
      destination: `${ environment.folder }/wwwroot/pdf`,
    },
  ];
};
