import React from 'react';
import FriendItem from './FriendItem';
import Radium from 'radium';
import { MAX_OUTPUT } from '../utils/constants';

const style = {
  contentStyle: {
    padding: '2em 3em 0',
    marginLeft: '25%',
    '@media (max-width: 48em)': {
      maxWidth: '350px',
      margin: 'auto',
      padding: '2em 1em 0'
    }
  },
  noData: {
    textAlign: 'center',
    color: 'white'
  }
};

const renderFriends = ({ myFriends, query }) => {

  const len = myFriends.length > MAX_OUTPUT ? MAX_OUTPUT : myFriends.length;
  const result = myFriends.slice(0, len).reduce((prev, curr, i) => {

    if (curr.name.match(new RegExp(query, 'i'))) {
      prev.push(<FriendItem key={i} rank={i + 1} {...curr} />);
    }

    return prev;

  }, []);

  return result.length > 0 ? result : (<div style={style.noData}>No results for: "{query}"</div>);

};

const FriendList = (props) => (
  <div style={style.contentStyle}>
    <div>
      {renderFriends(props)}
    </div>
  </div>
);

export default Radium(FriendList);
