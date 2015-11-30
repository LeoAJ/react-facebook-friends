import React from 'react';
import Radium from 'radium';

const style = {
  btn: {
    backgroundColor: '#55acee',
    margin: '0 auto',
    color: 'white',
    width: 'inherit'
  },
  title: {
    color: '#55acee'
  },
  main: {
    backgroundColor: 'white',
    padding: '25px 5px',
    borderRadius: '3px'
  },
  wrapper: {
    textAlign: 'center',
    position: 'absolute',
    width: '40%',
    height: '20%',
    margin: 'auto',
    top: '20%',
    right: '30%',
    '@media (max-width: 48em)': {
      left: '0',
      width: '100%'
    }
  }
};

const Login = () => (
  <div style={style.wrapper}>
    <h2 style={style.title}>Checkout who are you best friends on Facebook</h2>
    <div style={style.main}>
      <h4>Facebook required your permission to do further action</h4>
      <button className="pure-button" style={style.btn} onClick={this.props.FB_login}>Agree</button>
    </div>
  </div>
);

export default Radium(Login);
