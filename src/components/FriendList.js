import React, { Component, PropTypes } from 'react';
import FriendItem from './FriendItem';
import Radium from 'radium';
import { MAX_OUTPUT } from '../utils/constants';

class FriendList extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    myFriends: PropTypes.array.isRequired
  }

  renderFriends(myFriends) {

    const len = myFriends.length > MAX_OUTPUT ? MAX_OUTPUT : myFriends.length;
    let dom = [], i = 0;

    for (; i < len; i++) {
      dom.push(<FriendItem key={i} {...myFriends[i]} rank={i + 1} />);
    }

    return len > 0 ? dom : null;

  }

  render() {

    const { myFriends } = this.props,
            contentStyle = {
              padding: '2em 1em 0',
              '@media (min-width: 48em)': {
                padding: '2em 3em 0',
                marginLeft: '25%'
              }
            };

    return (
      <div className="pure-u-1 pure-u-md-3-4" style={contentStyle}>
        <div>
          {this.renderFriends(myFriends)}
        </div>
      </div>
    );
  }
}

export default Radium(FriendList);
