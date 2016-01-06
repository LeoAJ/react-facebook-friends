import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import 'babel-polyfill';

// import CSS
import '../vendor/css/gh-fork-ribbon.css';
import '../vendor/css/font-awesome.css';
import '../vendor/css/base.css';
import '../vendor/css/buttons.css';

render(
  <App />,
  document.querySelector('#root')
);
