import { argv } from 'yargs';
import webpackConfig from '../webpack/_base';

const KARMA_ENTRY_FILE = 'karma.entry.js';

const setConfig = () => {

  return {
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './test/components/**.js',
      './' + KARMA_ENTRY_FILE
    ],
    preprocessors: {
      ['test/components/**.js']: ['webpack'],
      [KARMA_ENTRY_FILE]: ['webpack']
    },
    singleRun: !argv.watch,
    frameworks: ['mocha', 'sinon-chai', 'chai-as-promised', 'chai'],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    webpack: {
      devtool: 'inline-source-map',
      plugins: webpackConfig.plugins,
      module: {
        loaders: webpackConfig.module.loaders
      }
    },
    webpackMiddleware : {
      noInfo : true
    }
  };

};

export default config => config.set(setConfig());
