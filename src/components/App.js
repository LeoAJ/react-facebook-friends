/*global FB*/

import React, { Component } from 'react';
import Profile from './Profile';
import FriendList from './FriendList';
import ErrMsg from './ErrMsg';
import config from '../../config';
import { getData } from '../utils/util';
import Ribbon from './Ribbon';
import Spinner from './Spinner';
import Login from './Login';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { status: 'loading' };
  }

  componentWillMount() {
    document.body.style.backgroundColor = 'rgb(233, 234, 237)';
  }

  componentDidMount() {

    window.fbAsyncInit = () => {

      FB.init(config);

      FB.getLoginStatus((response) => {

        if (response.status === 'unknown') {
          // show log in
          this.setState({ status: response.status });
        }

      });

      FB.Event.subscribe('auth.statusChange', (response) => {

        // start spinner
        this.setState({ status: 'loading' });

        (async () => {

          try {
            const { profile, myFriends } = await getData();
            this.setState({ status: response.status, profile, myFriends });
          } catch (e) {
            console.error(e);
            this.setState({ status: 'err' });
          }

        })();

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
    FB.login(() => {}, { scope: ['user_posts', 'read_custom_friendlists'] });
  }

  mainRender(state) {

    const { profile, myFriends, status } = state;

    if (status === 'err') {
      return <ErrMsg />
    } else if (status === 'unknown') {
      return <Login FB_login={this._click} />;
    } else if (status === 'connected') {
      return (
        <div className="pure-g">
          <Profile {...profile} />
          <FriendList myFriends={myFriends} />
        </div>
      );
    } else {
      return <Spinner />
    }
  }

  render() {

    return (
      <div>
        <Ribbon />
        {this.mainRender(this.state)}
      </div>
    );
  }

}

export default App;
