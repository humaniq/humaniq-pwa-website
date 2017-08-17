/* eslint-disable */
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ManifestPlugin from 'webpack-manifest-plugin'
import autoprefixer from 'autoprefixer'

import { SOURCE_PATH, MANIFEST_NAME } from './_consts'
import commonConfig from './base'

export default webpackMerge(commonConfig, {
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: false,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // TODO: move to postcss.config.js
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              'last 3 version'
            ],
          }),
        ],
        context: SOURCE_PATH,
      },
    }),
    new ExtractTextPlugin('assets/css/[name].[chunkhash].css'),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en)$/),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: 'source-map',
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // }),
    new ManifestPlugin({
      fileName: MANIFEST_NAME,
      seed: {
        name: 'HumanIQ',
        short_name: 'HumanIQ',
        description: 'HumanIQ is a simple and secure mobile app, delivering financial inclusion solutions globally.',
        lang: 'en-US',
        start_url: '.',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#3AA3E3',
        background_color: '#fff',
        icons: [{
          src: 'img/apple-touch-icon/180x180.png',
          sizes: '180x180',
          type: 'image/png',
        },{
          src: 'img/apple-touch-icon/192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },{
          src: 'img/apple-touch-icon/512x512.png',
          sizes: '512x512',
          type: 'image/png',
        }],
        related_applications: [{
          'platform': 'web'
        }]
      }
    }),
  ],
  devtool: 'source-map',
  entry: {
    bundle: [
      'babel-polyfill',
      './index.js',
    ],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: "css-loader" },
            // { loader: "resolve-url-loader" },
            { loader: "postcss-loader", options: {
              sourceMap: true,
              includePaths: SOURCE_PATH,
            }},
            { loader: "sass-loader", options: {
              sourceMap: true,
              includePaths: SOURCE_PATH,
            }},
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: "css-loader" },
            // { loader: "resolve-url-loader" },
            { loader: "postcss-loader", options: {
              sourceMap: true,
              includePaths: SOURCE_PATH,
            }},
          ]
        }),
      }
    ]
  },
})
