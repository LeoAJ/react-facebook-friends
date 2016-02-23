import React from 'react';
import radium from 'radium';

export default radium(() => (
  <div className="github-fork-ribbon-wrapper left fixed" style={{
    '@media (max-width: 48em)': {
      display: 'none'
    }
  }}>
    <div className="github-fork-ribbon">
      <a target="_blank" href="https://github.com/LeoAJ">Fork me on Github</a>
    </div>
  </div>
));
