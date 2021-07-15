function environment() {

  return {
    production: process.env.APP_ENV === 'prod' || process.env.APP_ENV === 'production',
    domain: process.env.APP_URL,
    folder: '',
    postStrings: {
      titlePage: process.env.APP_NAME,
      metaDescription: process.env.APP_DESCRIPTION,
      ogSiteName: process.env.OG_SITE_NAME,
      ogTitle: process.env.OG_TITLE,
      ogDescription: process.env.OG_DESCRIPTION,
      ogUrlProduction: process.env.OG_PROD_URL,
      gtmCode: process.env.GTM_CODE,
    },
  };
}

try {

  module.exports = (environment)();
} catch (e) {

  console.warn('Module is not supported, please refactor it!');
}
