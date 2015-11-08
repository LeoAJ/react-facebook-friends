import React, { Component } from 'react';
import FriendItem from './FriendItem';

class FriendList extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const text = [];

    for (let i = 0; i < 10; i++) {
      text.push(<FriendItem key={i} />);
    }

    return (
      <div className="ten wide column">
        <div className="ui cards">
          {text}
        </div>
      </div>
    );
  }
}

export default FriendList;
