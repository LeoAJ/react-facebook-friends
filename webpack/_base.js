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
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader'
      ]
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: _ => [autoprefixer({ browsers: ['last 2 versions'] })]
          }
        }
      ]
    }, {
      test: /\.(woff|woff2|ttf|svg)$/,
      exclude: /node_modules/,
      use: [
        'url-loader?limit=100000'
      ]
    }, {
      test: /\.(eot|png)$/,
      exclude: /node_modules/,
      use: [
        'file-loader'
      ]
    }]
  }
};

export default webpackConfig;
