// @flow

import React from 'react';
import '../style/ErrMsg.css';

const ErrMsg = () => (
  <div className="wrapper">
    <div className="box">
      <div className="title">Error</div>
      <p className="msg">We are sorry but something went wrong, please try again later.</p>
    </div>
  </div>
);

export default ErrMsg;
