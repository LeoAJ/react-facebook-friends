// Karma configuration
var path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      'test/**/*.js'
    ],
    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel',
          exclude: path.resolve(__dirname, 'node_modules')
        }, {
          test: /\.json$/,
          loader: 'json',
        },
      ]},
      externals: {
        'jsdom': 'window',
        'react/lib/ExecutionEnvironment': 'window',
        'react/lib/ReactContext': true,
        'react/addons': true
      }
    },
    webpackServer: {
      noInfo: true
    },
    plugins: [
      'karma-webpack',
      'karma-chai',
      'karma-mocha',
      'karma-sinon',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-phantomjs-launcher'
    ],
    babelPreprocessor: {
      options: {
        sourceMap: 'inline',
        presets: ['es2015']
      }
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
