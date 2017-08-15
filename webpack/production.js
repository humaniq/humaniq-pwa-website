/* eslint-disable */
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import OfflinePlugin from 'offline-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer');
const sourcePath = path.join(__dirname, './src');

const root = path.join(process.cwd());

import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import { resolve } from 'path'

import commonConfig from './base'

export default webpackMerge(commonConfig, {
  devtool: 'source-map',
  entry: {
    bundle: [
      'babel-polyfill',
      './src/index.js'
    ],
  },
  output: {
    path: resolve(process.cwd(), 'static'),
    filename: 'assets/js/[name].[hash:8].js',
    chunkFilename: 'assets/js/[name].[hash:8].chunk.js',
    publicPath: '/',
    pathinfo: false,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: "css-loader"
          }, {
            loader: "postcss-loader"
          }, {
            loader: "sass-loader",
            options: {
              includePaths: path.resolve(process.cwd(), "./src"),
            }
          }]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
            options: {
              includePaths: path.resolve(root, "src"),
            }
          }]
        })
      },
      { test: /\.(eot|png|ttf|svg|woff|woff2)$/, loader: 'url-loader'}
    ]
  },

  resolve: {
    modules: [
      path.resolve(process.cwd(), 'src'),
      'node_modules'
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              'last 3 version'
            ],
          }),
        ],
        context: sourcePath,
      },
    }),
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: false,
      'process.env.NODE_ENV': JSON.stringify('production')
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
      sourceMap: 'source-map'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new ManifestPlugin({
      fileName: 'manifest.json',
      seed: {
        name: 'Humaniq',
        short_name: 'Humaniq',
        description: 'Humaniq is a simple and secure mobile app, delivering financial inclusion solutions globally.',
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
        }],
        related_applications: [{
          'platform': 'web'
        }]
      }
    }),
    new OfflinePlugin({
      caches: 'all',
      publicPath: '/',
      responseStrategy: 'cache-first',
      updateStrategy: 'changed',
      externals: [],
      relativePaths: true,
      cacheMaps: [
        {
          match: function(requestUrl) {
            return new URL('/', location)
          },
          requestTypes: ['navigate', 'same-origin']
        },
      ],
      autoUpdate: 1000 * 60 * 60 * 3, // (3 hours auto update)
      ServiceWorker: {
        output: 'service-worker.js',
        navigateFallbackURL: '/',
        minify: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: Package.title,
      inject: true,
      template: resolve(__dirname, '..', 'static', 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
  ]
})
