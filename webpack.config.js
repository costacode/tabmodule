const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const config = {
  entry: ['./app.js', './scss/app.scss'],
  output: {
      // webpack prefers absolute paths
      path: path.resolve(__dirname, './build'),
      filename: 'app.bundle.js'
  },
  // tell webpack what to do with css and what loader to use
  // wepbpack needs loaders because it only understands js
  module: {
      rules: [
          { // for css files
              test: /\.(sass|scss)$/,
              use: ExtractTextPlugin.extract([
                  'css-loader', // translates CSS into CommonJS
                  'postcss-loader',
                  'sass-loader' // compiles Sass to CSS
              ])
          }
      ]
  },
  plugins: [
      new ExtractTextPlugin({
          filename: 'app.bundle.css',
          allChunks: true
      })
  ]
};

module.exports = config;