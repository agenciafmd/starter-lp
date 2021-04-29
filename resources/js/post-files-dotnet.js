const environment = require('./environment.js');
const fse = require('fs-extra');

const filterFiles = (src, dest) => {

  console.log(`de ${ src } para ${ dest } copiado`);
  return true;
};

if (!environment.folder) {

  console.error(`Por favor, verifique no arquivo enviroment.js se o nome da pasta está preenchido de acordo com a estrutura do projeto dotnet`);
  return;
}

sourceFiles().forEach((sourceFile) => {

  fse.copySync(
      `${ sourceFile.source }`,
      `${ environment.folder }${ sourceFile.destination }`,
      { filter: filterFiles },
  );
});

function sourceFiles() {

  return [
    {
      source: 'public/css',
      destination: '/wwwroot/css',
    },
    {
      source: 'public/fonts',
      destination: '/wwwroot/fonts',
    },
    {
      source: 'public/images',
      destination: '/wwwroot/images',
    },
    {
      source: 'public/js',
      destination: '/wwwroot/js',
    },
    {
      source: 'public/svg',
      destination: '/wwwroot/svg',
    },
    {
      source: 'public/favicon.ico',
      destination: '/wwwroot/favicon.ico',
    },
    {
      source: 'public/index.html',
      destination: '/Views/Home/Index.cshtml',
    },
    {
      source: 'public/pdf',
      destination: '/wwwroot/pdf',
    },
  ];
};
