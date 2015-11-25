import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import emitter from '../utils/emitter';
import { facebookBlue } from '../utils/constants';
import isEqual from 'lodash.isequal';

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    total_count: PropTypes.number.isRequired
  }

  changeHandler(e) {
    emitter.emit('search', e.target.value);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(nextProps, this.props);
  }

  render() {

    const { name, link, url, total_count } = this.props,
          style = {
            profileStyle: {
              background: facebookBlue,
              color: '#fff',
              '@media (min-width: 48em)': {
                position: 'fixed',
                top: '0',
                bottom: '0'
              }
            },
            headerStyle: {
              textAlign: 'center',
              top: 'auto',
              margin: '3em auto',
              padding: '1em',
              '@media (min-width: 48em)': {
                margin: '50% 2em 0'
              }
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
            }
          };

    return (
      <div className="pure-u-1 pure-u-md-1-4" style={style.profileStyle}>
        <div style={style.headerStyle}>
          <a target="_blank" href={link}>
            <img src={url} alt="profile picture" style={style.imgStyle} />
          </a>
          <h1 style={style.nameStyle}>{name}</h1>
          <h3 style={style.countStyle}>You have {total_count} friends on Facebook</h3>
          <input placeholder="Search for your friends" style={style.searchInput} onChange={this.changeHandler} />
        </div>
      </div>
    );
  }
}

export default Radium(Profile);
