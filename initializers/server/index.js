const path = require('path');
require('app-module-path').addPath(path.join(process.cwd(), 'src'));
require('./globals')
// const compression = require('compression')
// const mime = require('mime');
const serveStatic = require('serve-static')
// const fs = require('fs.extra');

require('babel-core/register');
['.css', '.less', '.sass', '.ttf', '.woff', '.woff2', '.scss'].forEach((ext) => require.extensions[ext] = () => {
});

const port = process.env.PORT || 8080;

const express = require('express')
const application = express()

application.use(serveStatic('static'));

// application.use(serveStatic('static', {
//   'index': false,
//   'setHeaders': function(res, path) {
//     res.setHeader('content-type', mime.lookup(path));
//   }
// }));

// application.use(express.static('static', {
//   setHeaders: function (res, path) {
//     res.set({
//       "Content-Type": mime.lookup(path),
//       'aaaa': 'bbbb'
//     })
//   } }
// ));

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

// application.use(compression());
//
// application.use(function(req, res) {
//   console.log('req.url.includes("static"', req.url.includes("static"))
//   if(req.url.includes("static") || req.url.includes("assets")){
//     fs.readFile('./static/' + req.url, function(err, data) {
//       if(err) {
//         res.send("Oops! Couldn't find that file.");
//       } else {
//         // set the content type based on the file
//         console.log('url', req.url)
//         res.contentType(mime.lookup(req.url.replace('/static/', '')));
//         res.send(data);
//       }
//       res.end();
//     });
//   }
// });
//

if(process.env.NO_SSR){
  application.use(require('./noSSR').default)
}else{
  application.use(require('./render').default)
}


application.listen(port, (err) => {
  if (err) console.log(err);
})