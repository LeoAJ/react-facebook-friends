import React, { Component } from 'react';
import Radium from 'radium';

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { name, link, url, total_count } = this.props.profileData,
          style = {
            profileStyle: {
              background: 'rgb(58, 87, 149)',
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
            }
          };

    return (
      <div className="pure-u-1 pure-u-md-1-4" style={style.profileStyle}>
        <div style={style.headerStyle}>
          <a href={link}>
            <img src={url} alt="profile picture" style={style.imgStyle} />
          </a>
          <h1 style={style.nameStyle}>{name}</h1>
          <h2 style={style.countStyle}>You have {total_count} friends</h2>
        </div>
      </div>
    );
  }
}

export default Radium(Profile);
