import React from 'react';
import Radium from 'radium';

const style = {
  btn: {
    backgroundColor: '#55acee',
    color: 'white'
  },
  title: {
    textAlign: 'center',
    color: '#55acee',
    '@media (max-width: 600px)': {
      fontSize: '1em'
    }
  },
  main: {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '15px 5px',
    borderRadius: '3px',
    '@media (max-width: 600px)': {
      fontSize: '0.9em'
    }
  },
  wrapper: {
    display: 'flex',
    minHeight: '60vh',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default Radium(({ FB_login }) => (
  <div style={style.wrapper}>
    <div>
      <h2 style={style.title}>Checkout who are you best friends on Facebook</h2>
      <div style={style.main}>
        <h4>Facebook required your permission to do further action</h4>
        <button className="pure-button" style={style.btn} onClick={FB_login}>Agree</button>
      </div>
    </div>
  </div>
));
