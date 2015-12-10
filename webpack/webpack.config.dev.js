import webpack from 'webpack';
import webpackConfig from './_base';

webpackConfig.devtool = 'cheap-module-eval-source-map';

webpackConfig.entry = [
  'webpack-hot-middleware/client',
].concat(webpackConfig.entry);

webpackConfig.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

export default webpackConfig;
