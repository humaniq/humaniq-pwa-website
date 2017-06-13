const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('../../webpack.noSSR.config.js');
config.devtool = 'cheap-module-eval-source-map'
const host = 'localhost';
const port = 8080;

new webpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  noInfo: true,
  stats: {
    colors: true,
  }
}).listen(port, host, (err) => {
  if (err) console.log(err);
});