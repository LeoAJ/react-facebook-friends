import React, { PropTypes } from 'react';
import { facebookBlue } from '../utils/constants';
import '../style/Label.css';

const Label = ({ text, icon, top, value }) => (
  <div className="label-wrapper">
    <div className="label-valueGroup">
      <i className={icon} />
      <span>{value}</span>
    </div>
    <div className="label-text">{text}</div>
  </div>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default Label;
