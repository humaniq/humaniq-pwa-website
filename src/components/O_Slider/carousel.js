if (__CLIENT__) {
  module.exports = require('react-swipe');
} else {
  module.exports = require('utils/server');
}