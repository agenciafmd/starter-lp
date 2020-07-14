function environment() {

  return {
    production: false,
    domain: 'starter-lp.local',
  };
}

try {

  module.exports = (environment)();
} catch (e) {

  console.warn('Module is not supported, please refactor it!');
}