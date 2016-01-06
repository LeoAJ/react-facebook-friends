import React, { Component } from 'react';
import { facebookBlue } from '../utils/constants';
import Spinjs from 'spin.js';

const config = {
  lines: 13,
  length: 30,
  width: 10,
  radius: 25,
  scale: 1,
  corners: 1,
  color: facebookBlue,
  opacity: 0.50,
  rotate: 0,
  direction: 1,
  speed: 1,
  trail: 60,
  fps: 20,
  zIndex: 2e9,
  top: '45%',
  left: '50%',
  shadow: false,
  hwaccel: false,
  position: 'absolute'
};

class Spinner extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.instance = new Spinjs(config);
    this.instance.spin(this.refs.spin);
  }

  render() {
    return (<div ref="spin" style={{
      height: '100vh',
      opacity: '0.75',
      backgroundColor: '#ffffff',
      'zIndex': '500'
    }}></div>);
  }

}

export default Spinner;
