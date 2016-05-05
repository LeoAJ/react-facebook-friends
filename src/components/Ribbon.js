import React from 'react';
import classNames from 'classnames';
import jss from 'jss';
import camelCase from 'jss-camel-case';

jss.use(camelCase());

const { classes } = jss.createStyleSheet({
  wrapper: {
    display: 'block'
  },
  '@media (max-width: 48em)': {
    wrapper: {
      display: 'none'
    }
  }
}).attach();

const Ribbon = () => (
  <div className={classNames('github-fork-ribbon-wrapper', 'left', 'fixed', classes.wrapper)}>
    <div className="github-fork-ribbon">
      <a target="_blank" href="https://github.com/LeoAJ">Fork me on Github</a>
    </div>
  </div>
);

export default Ribbon;
