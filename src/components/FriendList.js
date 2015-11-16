import React, { Component } from 'react';
import FriendItem from './FriendItem';
import Radium from 'radium';

class FriendList extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { friendsData } = this.props,
          len = friendsData.length > 25 ? 25 : friendsData.length;

    let dom = [], i = 0;

    for (; i < len; i++) {
      dom.push(<FriendItem key={i} {...friendsData[i]} rank={i + 1} />);
    }

    const contentStyle = {
      padding: '2em 1em 0',
      '@media (min-width: 48em)': {
        padding: '2em 3em 0',
        marginLeft: '25%'
      }
    };

    return (
      <div className="pure-u-1 pure-u-md-3-4" style={contentStyle}>
        <div>
          {dom}
        </div>
      </div>
    );
  }
}

export default Radium(FriendList);
