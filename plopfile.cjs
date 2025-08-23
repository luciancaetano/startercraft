const componentGenerator = require('./generators/component/index');
const featureGenerator = require('./generators/feature/index');
const providerGenerator = require('./generators/provider/index');
const subcomponentGenerator = require('./generators/subcomponent/index');

/**
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('feature', featureGenerator);
  plop.setGenerator('provider', providerGenerator);

  // Garantir que subcomponentGenerator é uma função válida
  if (typeof subcomponentGenerator === 'function') {
    subcomponentGenerator(plop);
  }
};
