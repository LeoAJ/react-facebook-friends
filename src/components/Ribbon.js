import React from 'react';
import cx from 'classnames';
import '../style/Ribbon.css';

const Ribbon = () => (
  <div className={cx('github-fork-ribbon-wrapper', 'left', 'fixed', 'ribbon-wrapper')}>
    <div className="github-fork-ribbon">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/LeoAJ">Fork me on Github</a>
    </div>
  </div>
);

export default Ribbon;
