import React, { Component, PropTypes } from 'react';
import { facebookBlue } from '../utils/constants';
import emitter from '../utils/emitter';
import shallowCompare from 'react-addons-shallow-compare';
import jss from 'jss';
import camelCase from 'jss-camel-case';

jss.use(camelCase());

const { classes } = jss.createStyleSheet({
  profileStyle: {
    position: 'fixed',
    width: 'inherit',
    minHeight: '100vh',
    background: facebookBlue,
    color: '#fff'
  },
  flexContainer: {
    flex: '1 1 0%',
    width: '300px'
  },
  headerStyle: {
    textAlign: 'center',
    top: 'auto',
    margin: '3em auto',
    padding: '1em'
  },
  imgStyle: {
    border: '3px solid white',
    borderRadius: '3px'
  },
  nameStyle: {
    margin: '0'
  },
  countStyle: {
    margin: '0',
    color: 'rgb(176, 202, 219)',
    fontWeight: '300'
  },
  searchInput: {
    color: 'black',
    marginTop: '5px',
    boxSizing: 'border-box',
    padding: '.5em',
    width: '75%',
    borderRadius: '3px',
    border: '1px solid #aaa'
  },
  '@media (max-width: 1050px)': {
    profileStyle: {
      position: 'static',
      width: 'auto',
      minHeight: 'initial'
    },
    flexContainer: {
      flex: '1 1 100%',
      width: 'auto'
    }
  },
  '@media (min-width: 48em)': {
    headerStyle: {
      margin: '50% 1em 0'
    }
  }
}).attach();

class Profile extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    total_count: PropTypes.number.isRequired
  };

  changeHandler = (e) => emitter.emit('search', e.target.value);

  shouldComponentUpdate = (nextProps) => shallowCompare(this, nextProps);

  render() {
    const { name, link, url, total_count } = this.props;
    const renderSearchBox = () => {
      return total_count === 0
            ? null
            : <input
              placeholder="Search friends"
              className={classes.searchInput}
              onChange={this.changeHandler}
              autoFocus
            />;
    };

    return (
      <div className={classes.flexContainer}>
        <div className={classes.profileStyle}>
          <div className={classes.headerStyle}>
            <a target="_blank" href={link}>
              <img src={url} alt="" className={classes.imgStyle} />
            </a>
            <h1 className={classes.nameStyle}>{name}</h1>
            <h3 className={classes.countStyle}>You have {total_count} friends on Facebook</h3>
            {renderSearchBox()}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
