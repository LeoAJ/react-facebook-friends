import React from 'react';
import Radium from 'radium';

const style = {
  '@media (max-width: 48em)': {
    display: 'none'
  }
};

const Ribbon = () => (
  <div className="github-fork-ribbon-wrapper left fixed" style={style}>
    <div className="github-fork-ribbon">
      <a target="_blank" href="https://github.com/LeoAJ">Fork me on Github</a>
    </div>
  </div>
);

export default Radium(Ribbon);
