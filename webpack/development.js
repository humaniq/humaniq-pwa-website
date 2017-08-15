/* eslint-disable */
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import { resolve } from 'path'

import commonConfig from './base'

export default webpackMerge(commonConfig, {
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'cheap-module-eval-source-map',
  entry: {
    bundle: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      'babel-polyfill',
      './index.js',
    ],
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          failOnWarning: false,
          failOnError: true
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader", options: { includePaths: resolve(process.cwd(), "src") } },
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader"},
          { loader: "css-loader", options: { includePaths: resolve(__dirname, "src") } },
        ]
      }
    ]
  }
})
