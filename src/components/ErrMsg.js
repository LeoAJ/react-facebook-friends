import React from 'react';
import jss from 'jss';
import camelCase from 'jss-camel-case';

jss.use(camelCase());

const { classes } = jss.createStyleSheet({
  wrapper: {
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    borderRadius: '3px',
    backgroundColor: '#FFF6F6',
    padding: '15px'
  },
  title: {
    fontSize: '20px',
    textAlign: 'center',
    color: '#912D2B',
    fontWeight: 'bold'
  },
  msg: {
    color: 'rgb(159, 58, 56)'
  }
}).attach();

const ErrMsg = () => (
  <div className={classes.wrapper}>
    <div className={classes.box}>
      <div className={classes.title}>Error</div>
      <p className={classes.msg}>We are sorry but something went wrong, please try again later.</p>
    </div>
  </div>
);

export default ErrMsg;
