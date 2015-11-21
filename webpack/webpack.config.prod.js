import webpack from 'webpack';
import webpackConfig from './_base';

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
