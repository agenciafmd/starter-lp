function environment() {

  return {
    production: false,
    domain: 'starter-lp.local',
    postStrings: {
      titlePage: 'Starter-LP F&MD',
      metaDescription: 'Descrição completa da página',
      ogSiteName: 'Starter-LP | Nome do cliente',
      ogTitle: 'Starter-LP | Nome do cliente',
      ogDescription: 'Descrição curta para aparecer no compartilhar',
      ogUrlProduction: 'https://www.starterlp.com.br',
      gtmCode: 'GTM-',
    },
  };
}

try {

  module.exports = (environment)();
} catch (e) {

  console.warn('Module is not supported, please refactor it!');
}