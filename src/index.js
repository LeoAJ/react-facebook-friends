import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import 'babel-polyfill';

// import CSS
import '../vendor/css/gh-fork-ribbon.css';
import '../vendor/css/font-awesome.css';
import '../vendor/css/base.css';
import '../vendor/css/grids-responsive.css';

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
