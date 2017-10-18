/* global __dirname */
/* eslint no-console: 0 */

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack/webpack.config.dev';

const app = express();
const compiler = webpack(config);
const host = 'localhost';
const port = 3000;

app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true
  },
  hot: true,
  quiet: false,
  lazy: false,
  noInfo: false,
  historyApiFallback: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, host, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at ${host}:${port}`);
});
