const webpack = require('webpack');
const path = require('path');

const PATHS = {
  app: './index.js',
  html: './index.html',
  dist: path.join(__dirname, 'dist'),
};

module.exports = {
  entry: {
    javascript: PATHS.app,
    html: PATHS.html,
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: PATHS.dist,
  },
  eslint: {
    emitWarning: true,
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['eslint-loader'],
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
