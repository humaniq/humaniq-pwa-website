require('babel-core/register');
var fs = require('fs.extra');

var webpack = require('webpack');

var config = require('./production.js').default;

webpack(config, function (_error, stats) {
  console.log("-=callback started=-");
  var manifest = stats.toJson().assetsByChunkName;
    fs.writeFile('webpack-manifest.json', JSON.stringify(manifest), function(err) {
        if (err) console.log(err);
        console.log("-=Exit=-");
        process.exit();
    });
});
