import React from 'react';
import Radium from 'radium';

const style = {
  wrapper: {
    padding: '5px',
    borderRadius: '3px',
    backgroundColor: '#FFF6F6',
    position: 'absolute',
    width: '35%',
    height: '8%',
    margin: 'auto',
    top: '20%',
    right: '35%',
    textAlign: 'center',
    '@media (max-width: 48em)': {
      left: '0',
      width: '100%'
    }
  },
  icon: {
    fontSize: '1em'
  },
  title: {
    color: '#912D2B',
    fontWeight: 'bold'
  },
  msg: {
    color: 'rgb(159, 58, 56)'
  }
};

const ErrMsg = () => (
  <div style={style.wrapper}>
    <h6 style={style.title}>Error!!</h6>
    <p style={style.msg}>We are sorry but something went wrong, please try again later.</p>
  </div>
);

export default Radium(ErrMsg);
