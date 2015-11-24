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

  renderFriends(nodata) {

    let { myFriends, query } = this.props;
    const len = myFriends.length > MAX_OUTPUT ? MAX_OUTPUT : myFriends.length;

    const result = myFriends.slice(0, len).reduce((prev, curr, i) => {

      if (curr.name.match(new RegExp(query, 'i'))) {
        prev.push(<FriendItem key={i} {...curr} rank={i + 1} />);
      }

      return prev;

    }, []);

    return result.length > 0 ? result : (<div style={nodata}>No results for: "{query}"</div>);
  }

  render() {

    const contentStyle = {
      padding: '2em 1em 0',
      '@media (min-width: 48em)': {
        padding: '2em 3em 0',
        marginLeft: '25%'
      },
      nodata: {
        color: 'white'
      }
    };

    return (
      <div className="pure-u-1 pure-u-md-3-4" style={contentStyle}>
        <div>
          {this.renderFriends(contentStyle.nodata)}
        </div>
      </div>
    );
  }
}

export default Radium(FriendList);
