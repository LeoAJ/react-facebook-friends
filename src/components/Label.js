import React, { Component, PropTypes } from 'react';
import { facebookBlue } from '../utils/constants';
import Radium from 'radium';

const style = {
  wrapper: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    display: 'flex',
    padding: '0',
    '@media (max-width: 590px)': {
      flex: '1 1 100%'
    }
  },
  label: {
    fontSize: '1.5em',
    '@media (max-width: 590px)': {
      display: 'none'
    }
  },
  valueGroup: {
    fontSize: '4em',
    '@media (max-width: 590px)': {
      fontSize: '1em',
      color: 'white',
      backgroundColor: facebookBlue,
      padding: '3px',
      borderRadius: '3px'
    }
  }
};

export default Radium(({ text, icon, top, value }) => (
  <div style={style.wrapper}>
    <div style={style.valueGroup}>
      <i className={icon}></i>
      <span>{value}</span>
    </div>
    <div style={style.label}>{text}</div>
  </div>
));
