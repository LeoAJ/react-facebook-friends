/* global FB */
import React, { Component } from 'react';
import Profile from './Profile';
import FriendList from './FriendList';
import ErrMsg from './ErrMsg';
import Ribbon from './Ribbon';
import Login from './Login';
import config from '../../config';
import emitter from '../utils/emitter';
import { getData } from '../utils/util';
import '../style/App.css';
import '../style/spinner.css';
import { apiConfig } from '../utils/apiConfig';
import { APP_BACKGROUND_COLOR } from '../utils/constants';
import type { AppState } from '../type';

class App extends Component {
  state: AppState = {
    status: 'loading'
  };

  componentWillMount() {
    document.body.style.backgroundColor = APP_BACKGROUND_COLOR;
  }

  componentWillUnmount() {
    emitter.removeListener('search');
  }

  componentDidMount() {
    emitter.on('search', query => this.setState({ query }));
    window.fbAsyncInit = () => {
      FB.init(config);

      // show login
      FB.getLoginStatus(response => response.status !== 'connected' && this.setState({ status: response.status }));

      FB.Event.subscribe('auth.authResponseChange', async response => {
        try {
          const { profile, myFriends } = await getData();
          this.setState({ status: response.status, profile, myFriends });
        } catch (e) {
          this.setState({ status: 'err' });
        }
      });
    };
    apiConfig();
  }

  _click(): void {
    FB.login(_ => {}, { scope: ['user_posts', 'user_friends'] });
  }

  mainRender() {
    const {
      profile,
      myFriends,
      status,
      query
    } = this.state;
    if (status === 'err') {
      return (<ErrMsg />);
    } else if (status === 'unknown' || status === 'not_authorized') {
      return <Login fBLogin={this._click} />;
    } else if (status === 'connected') {
      return (
        <div className="app-wrapper">
          <Profile {...profile} />
          <FriendList myFriends={myFriends} query={query} />
        </div>
      );
    }
    return (
      <div className="spinner-wrapper">
        <div className="rotating-plane" />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Ribbon />
        {this.mainRender()}
      </div>
    );
  }
}

export default App;
