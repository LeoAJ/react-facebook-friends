// @flow

import React, { PropTypes } from 'react';
import '../style/Label.css';

const Label = ({
  text,
  icon,
  top,
  value
}: {
  text: string,
  icon: string,
  top: string,
  value: string
}) => (
  <div className="label-wrapper">
    <div className="label-valueGroup">
      <i className={icon} />
      <span>{value}</span>
    </div>
    <div className="label-text">{text}</div>
  </div>
);

export default Label;
