import React, { PropTypes } from 'react';
import { facebookBlue } from '../utils/constants';
import jss from 'jss';
import camelCase from 'jss-camel-case';

jss.use(camelCase());

const { classes } = jss.createStyleSheet({
  wrapper: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    display: 'flex',
    padding: '0'
  },
  label: {
    fontSize: '1.5em'
  },
  valueGroup: {
    fontSize: '4em'
  },
  '@media (max-width: 590px)': {
    wrapper: {
      flex: '1 1 100%'
    },
    label: {
      display: 'none'
    },
    valueGroup: {
      fontSize: '1em',
      color: 'white',
      backgroundColor: facebookBlue,
      padding: '3px',
      borderRadius: '3px'
    }
  }
}).attach();

const Label = ({ text, icon, top, value }) => (
  <div className={classes.wrapper}>
    <div className={classes.valueGroup}>
      <i className={icon}></i>
      <span>{value}</span>
    </div>
    <div className={classes.label}>{text}</div>
  </div>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default Label;
