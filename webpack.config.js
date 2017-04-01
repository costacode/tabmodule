const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
// const CompressionPlugin = require('compression-webpack-plugin');

const config = {
  entry: ['./app.js', './scss/app.scss'],
  output: {
      // webpack prefers absolute paths
      path: path.resolve(__dirname, './build'),
      filename: 'app.bundle.js'
  },
  // tell webpack what to do with css and what loader to use
  module: {
      rules: [
          { // for css files
              test: /\.(sass|scss)$/,
              use: ExtractTextPlugin.extract([
                  'css-loader', // translates CSS into CommonJS
                  'postcss-loader', // for autoprefix plugin
                  'sass-loader' // compiles Sass to CSS
              ])
          }
      ]
  },
  plugins: [
      new ExtractTextPlugin({
          filename: 'app.bundle.css',
          allChunks: true
      }),
      new WebpackNotifierPlugin()
    //   new CompressionPlugin({
    //     asset: "[path].gz[query]",
    //     algorithm: "gzip",
    //     test: /\.(js|css|html)$/,
    //     threshold: 0,
    //     minRatio: 0.0
    //   })      
  ]
};

module.exports = config;