import React, { PropTypes } from 'react';
import jss from 'jss';
import camelCase from 'jss-camel-case';

jss.use(camelCase());

const { classes } = jss.createStyleSheet({
  btn: {
    backgroundColor: '#55acee',
    color: 'white'
  },
  title: {
    textAlign: 'center',
    color: '#55acee'
  },
  main: {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '15px 5px',
    borderRadius: '3px'
  },
  wrapper: {
    display: 'flex',
    minHeight: '60vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  '@media (max-width: 600px)': {
    title: {
      fontSize: '1em'
    },
    main: {
      fontSize: '0.9em'
    }
  }
}).attach();

const Login = ({ fBLogin }) => (
  <div className={classes.wrapper}>
    <div>
      <h2 className={classes.title}>Checkout who are you best friends on Facebook</h2>
      <div className={classes.main}>
        <h4>Facebook required your permission to do further action</h4>
        <button className="pure-button" className={classes.btn} onClick={fBLogin}>Agree</button>
      </div>
    </div>
  </div>
);

Login.propTypes = {
  fBLogin: PropTypes.func.isRequired
};

export default Login;
