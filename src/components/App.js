/*global FB*/

import React, { Component } from 'react';
import Profile from './Profile';
import FriendList from './FriendList';
import ErrMsg from './ErrMsg';
import config from '../../config/FacebookAPIConfig';
import { getData } from '../util';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }

  componentWillMount() {
    document.body.style.backgroundColor = '#DADADA';
  }

  componentDidMount() {

    window.fbAsyncInit = () => {

      FB.init(config);

      FB.Event.subscribe('auth.statusChange', (res) => {

        getData()
        .then((data) => {
          this.setState({
            login: res.status === 'connected',
            profileData: data.profileData
          });
        })
        .catch((err) => {
          console.log(err);
          console.log('EEE');
          this.setState({
            login: res.status === 'connected',
            hasErr: true
          });
        });

      });
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }

  _click() {
    FB.login();
  }

  render() {

    const loginDom = (
      <div className="ui middle aligned center aligned grid" style={{ height: '400px' }}>
        <div className="column six wide">
          <h2 className="ui header">header</h2>
          <div className="ui piled segment">
            <p>Facebook required your permission to do further action</p>
            <button className="ui fluid large primary button" onClick={this._click.bind(this)}>OK</button>
          </div>
        </div>
      </div>);

    return (
      <div>
        {this.state.login ? (
          <div className="ui stackable three column grid">
            <Profile profileData={this.state.profileData} />
            <FriendList />
          </div>
        ) : loginDom}
      </div>
    );
  }

}

export default App;
