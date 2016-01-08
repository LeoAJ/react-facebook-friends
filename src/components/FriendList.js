import React from 'react';
import FriendItem from './FriendItem';
import Radium from 'radium';
import { MAX_OUTPUT } from '../utils/constants';

const emptyResult = (hasFriends, query) => {
  return <div style={{
    fontSize: '1.5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    minHeight: '100vh',
    '@media (max-width: 1050px)': {
      minHeight: 'auto'
    }
  }}>{hasFriends ? `No results for: "${query}"` : `No friends to show`}</div>;
};

const renderFriends = ({ myFriends, query }) => {

  const result = myFriends.reduce((prev, curr, i) => {

    if (curr.name.match(new RegExp(query, 'i'))) {
      prev.push(<FriendItem key={i} rank={i + 1} {...curr} />);
    }

    return prev;

  }, []);

  return result.length > 0 ? result : emptyResult(!!myFriends.length, query);

};

export default Radium((props) => (
  <div style={{
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 1050px)': {
      flex: '1 1 100%'
    }
  }}>
    {renderFriends(props)}
  </div>
));
