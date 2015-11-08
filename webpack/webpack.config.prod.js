import webpack from 'webpack';
import webpackConfig from './_base';

// webpackConfig.entry = './src/index';

webpackConfig.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    // unused: true,
    // dead_code: true,
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
