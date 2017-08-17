/* eslint-disable */
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'

import { SOURCE_PATH } from './_consts'
import commonConfig from './base'

export default webpackMerge(commonConfig, {
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: false,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
  devtool: 'cheap-module-eval-source-map',
  entry: {
    bundle: [
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
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "resolve-url-loader" },
          { loader: "sass-loader", options: {
            sourceMap: true,
            includePaths: SOURCE_PATH,
          }},
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader"},
          { loader: "resolve-url-loader" },
          { loader: "css-loader", options: {
            sourceMap: true,
            includePaths: SOURCE_PATH,
          }},
        ]
      },
    ]
  }
})
