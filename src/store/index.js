if (__DEVELOPMENT__) {
  module.exports = require('store/configureStore.dev');
} else {
  module.exports = require('store/configureStore.prod');
}
