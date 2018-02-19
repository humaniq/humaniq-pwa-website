const path = require('path');
require('app-module-path').addPath(path.join(process.cwd(), 'src'));
require('./globals')
const compression = require('compression')
const mime = require('mime');
// const serveStatic = require('serve-static')
// const fs = require('fs.extra');
require('dotenv').config();
const cors = require('cors')

require('babel-core/register');
['.css', '.less', '.sass', '.ttf', '.woff', '.woff2', '.scss'].forEach((ext) => require.extensions[ext] = () => {
});

const MixPanelController = require('./controllers/mixpanel').default

const port = process.env.PORT || 8080;

const express = require('express')
const application = express()

application.use(compression());

application.get('/api/v1/mixpanel', cors(), MixPanelController.show);


application.use(express.static('static', {
  setHeaders: function (res, path) {
    let cType = mime.lookup(path)
    res.set({
      "Content-Type": cType,
    })
  } }
));

application.set('views', __dirname)
application.set('view engine', 'ejs')

if (__DEVELOPMENT__) {
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
}

if(process.env.NO_SSR){
  application.use(require('./noSSR').default)
}else{
  application.use(require('./render').default)
}


application.listen(port, (err) => {
  if (err) console.log(err);
})