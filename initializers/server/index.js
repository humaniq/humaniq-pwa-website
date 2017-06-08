require('./globals')

require('babel-core/register');
['.css', '.less', '.sass', '.ttf', '.woff', '.woff2', '.scss'].forEach((ext) => require.extensions[ext] = () => {
});

const port = 8080;

const express = require('express')
const application = express()

application.use('/static', express.static('static'));

application.set('views', __dirname)
application.set('view engine', 'ejs')

const webpack = require('webpack');
const config = require('../../webpack.config.js').default;
const webpackDev = require('webpack-dev-middleware')
const webpackHot = require('webpack-hot-middleware')
const compiler = webpack(config)

application.use(
  webpackDev(
    compiler,
    {
      hot: true,
      publicPath: config.output.publicPath,
      stats: {colors: true}
    }
  )
)

application.use(webpackHot(compiler))
// application.use('/service-worker.js', express.static(path.join(__dirname, '../..', 'static/service-worker.js')))


application.get('*', require('./render').default)

application.listen(port, (err) => {
  if (err) console.log(err);
})