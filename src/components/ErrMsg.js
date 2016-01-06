import React from 'react';
import Radium from 'radium';

const style = {
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
};

export default Radium(() => (
  <div style={style.wrapper}>
    <div style={style.box}>
      <div style={style.title}>Error</div>
      <p style={style.msg}>We are sorry but something went wrong, please try again later.</p>
    </div>
  </div>
));
