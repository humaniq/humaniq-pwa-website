const path = require('path');
const webpack = require('webpack')

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    use: [{
      loader: "style-loader"
    }, {
      loader: "css-loader"
    }, {
      loader: "sass-loader",
      options: {
        includePaths: path.resolve(process.cwd(), "./src"),
      }
    }]
  });

  storybookBaseConfig.plugins.push(
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: true
    })
  )

  storybookBaseConfig.resolve.modules = [
    "node_modules",
    path.join(process.cwd(), 'src'),
    path.join(process.cwd(), 'stories'),
    path.join(process.cwd(), 'node_modules')
  ]

  return storybookBaseConfig;
};
