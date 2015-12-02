import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

const style = {
  label: {
    fontSize: '1.5em',
    textAlign: 'center',
    '@media (max-width: 48em)': {
      fontSize: '0.75em',
      display: 'none'
    }
  },
  value: {
    margin: '3px',
  },
  valueGroup: {
    fontSize: '4em',
    '@media (max-width: 48em)': {
      fontSize: '1em'
    }
  }
};

const Label = ({ text, icon, top, value }) => (
  <div style={{
    margin: value < 10 ? '0 25px' : '0 10px',
    display: 'inline-block',
    '@media (max-width: 48em)': {
      position: 'absolute',
      top: top,
      margin: value < 10 ? '0 25px' : '0 20px',
      backgroundColor: 'rgb(58, 87, 149)',
      color: 'white',
      padding: '5px',
      borderRadius: '3px'
    }
  }}>
    <div style={style.valueGroup}>
      <i className={icon}></i>
      <span style={style.value}>{value}</span>
    </div>
    <div style={style.label}>{text}</div>
  </div>
);

export default Radium(Label);
