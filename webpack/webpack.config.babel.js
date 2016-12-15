/* global __dirname */

import path from 'path';
import webpack from 'webpack';
import webpackConfig from './_base';

webpackConfig.devtool = 'source-map';

webpackConfig.output = {
  path: path.resolve(__dirname, '../', 'dist/'),
  filename: 'bundle.js'
};

webpackConfig.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    minimize: true,
    compress: {
      warnings: false
    }
  })
];

export default webpackConfig;
