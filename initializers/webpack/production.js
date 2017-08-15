/* eslint-disable */

import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import OfflinePlugin from 'offline-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const autoprefixer = require('autoprefixer');
const sourcePath = path.join(__dirname, './src');

const root = path.join(process.cwd());

process.noDeprecation = true
export default {
  devtool: 'source-map',
  entry: {
    bundle: [
      'babel-polyfill',
      './src/index.js'
    ],
  },
  output: {
    path: path.join(process.cwd(), 'static'),
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
    new OfflinePlugin({
      caches: 'all',
      publicPath: '/',
      responseStrategy: 'network-first',
      updateStrategy: 'changed',
      externals: [
        '/img/apple-touch-icon/180x180.png',
        'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700',
        'https://www.google-analytics.com/analytics.js',
        'https://www.google-analytics.com/collect?v=1&_v=j58&a=180854128&t=pageview&_s=1&dl=http%3A%2F%2Flocalhost%2F&ul=en-us&de=UTF-8&dt=Humaniq&sd=24-bit&sr=1920x1080&vp=1920x339&je=0&fl=26.0%20r0&_u=AACAAMABI~&jid=&gjid=&cid=1252809312.1501694302&tid=UA-91023234-4&_gid=1062100651.1502775875&z=2046795873',
      ],
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
      title: 'HumanIQ',
      cache: true,
      showErrors: true,
      template: path.resolve(__dirname, '..', 'server', 'template.html'),
    })
  ]
};