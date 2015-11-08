/*global FB*/

import React, { Component } from 'react';
import async from 'async';

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    const { name, link, url } = this.props.profileData;

    return (
        <div className="six ten column">
          <div className="center aligned">
            <div className="ui card">
              <div className="image">
                <img src={url} alt="profile picture" />
              </div>
              <div className="content">
                <a className="header">Kristy</a>
                <div className="meta">
                  <span className="date">Joined in 2013</span>
                </div>
                <div className="description">
                  Kristy is an art director living in New York.
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="user icon"></i>
                  22 Friends
                </a>
              </div>
            </div>
            </div>
      </div>
    );
  }
}

export default Profile;
