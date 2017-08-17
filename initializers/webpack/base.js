/* eslint-disable */
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import OfflinePlugin from 'offline-plugin'
process.noDeprecation = true

import { SOURCE_PATH, OUTPUT_PATH, PUBLIC_PATH } from './_consts'

export default {
  plugins: [
    new ProgressBarPlugin(),
    new OfflinePlugin({
      caches: 'all',
      publicPath: PUBLIC_PATH,
      responseStrategy: 'network-first',
      updateStrategy: 'changed',
      externals: [
        '/',
        '/img/apple-touch-icon/180x180.png',
        '/img/illustrations/the-power-of-blockchain.svg',
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
        navigateFallbackURL: PUBLIC_PATH,
        minify: true,
      },
      AppCache: false,
    }),
  ],
  context: SOURCE_PATH,
  output: {
    path: OUTPUT_PATH,
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[name].[hash:8].chunk.js',
    publicPath: PUBLIC_PATH,
    pathinfo: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              digest: 'hex',
              name: 'assets/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.md'],
    alias: {
      static: OUTPUT_PATH,
    },
    modules: [
      'node_modules',
    ],
  },
}
