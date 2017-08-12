var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var combineLoaders = require('webpack-combine-loaders');

var BUILD_DIR = path.join(__dirname, '/dist/');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    //  'react-hot-loader/patch',
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'app/index.jsx')
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
          template: 'app/index.html',
          inject: 'body',
          filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
      ],
  module: {
    rules: [{
      // Babel loader for es6.
      test: /\.jsx?/,
      exclude: '/node_modules/',
      include: path.join(__dirname, '/app/'),
      use: [{loader: 'babel-loader'}]
    },
    {
      // Linter rules.
      test: /\.jsx?$/, // both .js and .jsx
      exclude: ['/node_modules/', 'app/airports.js'],
      loader: 'eslint-loader',
      enforce: 'pre',
      options: {
        fix: true
      }
    },
    {
      test: /\.css$/,
      loader: combineLoaders([
        {
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
      }
  ])
  }
]}};

module.exports = config;
