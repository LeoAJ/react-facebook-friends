/*global FB*/

import React, { Component } from 'react';
import Profile from './Profile';
import FriendList from './FriendList';
import ErrMsg from './ErrMsg';
import config from '../../config/FacebookAPIConfig';
import { getData } from '../utils/helper';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }

  componentWillMount() {
    document.body.style.backgroundColor = 'rgb(233, 234, 237)';
  }

  componentDidMount() {

    window.fbAsyncInit = () => {

      FB.init(config);

      FB.Event.subscribe('auth.statusChange', (res) => {

        getData()
        .then(data => this.setState({ login: res.status === 'connected', profileData: data.profileData, friendsData: data.friendsData }))
        .catch((err) => {
          console.log('Error !!!!!!!!!!!!!!!');
          console.error(err);
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
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }

  _click() {
    FB.login(() => { }, { scope: ['user_posts', 'read_custom_friendlists'] });
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
          <div className="pure-g">
            <Profile profileData={this.state.profileData} />
            <FriendList friendsData={this.state.friendsData} />
          </div>
        ) : loginDom}
      </div>
    );
  }

}

export default App;
