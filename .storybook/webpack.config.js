const path = require('path');

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

  storybookBaseConfig.resolve.modules = [
    path.join(process.cwd(), 'src'),
    path.join(process.cwd(), 'stories'),
    path.join(process.cwd(), 'node_modules')
  ]

  return storybookBaseConfig;
};
