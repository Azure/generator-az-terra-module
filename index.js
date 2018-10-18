'use strict';

module.exports = {
  app: require.resolve('./generators/app'),
  build: require.resolve('./generators/build'),
  module: require.resolve('./generators/module'),
  example: require.resolve('./generators/example'),
  shared: require.resolve('./generators/shared'),
  test: require.resolve('./generators/test')
};
