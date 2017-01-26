// @flow

import React, { PropTypes } from 'react';
import '../style/Login.css';

const Login = ({ fBLogin }: { fBLogin: Function }) => (
  <div className="wrapper">
    <div>
      <h2 className="title">Checkout who are you best friends on Facebook</h2>
      <div className="main">
        <h4>Facebook required your permission to do further action</h4>
        <button className="pure-button btn" onClick={fBLogin}>Agree</button>
      </div>
    </div>
  </div>
);

export default Login;
