/* global __dirname */

import path from 'path';
import autoprefixer from 'autoprefixer';

const webpackConfig = {
  target: 'web',
  entry: ['babel-polyfill', path.resolve(__dirname, '../', 'src/')],
  output: {
    publicPath: '/dist/',
    path: path.resolve(__dirname, '../', 'dist/'),
    filename: 'bundle.js'
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: 'style!css!postcss',
        exclude: /node_modules/
      }, {
        test: /\.(woff|woff2|ttf|svg)$/,
        loader: 'url?limit=100000',
        exclude: /node_modules/
      }, {
        test: /\.(eot|png)$/,
        loader: 'file',
        exclude: /node_modules/
      }]
  }
};

export default webpackConfig;
