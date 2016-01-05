import React from 'react';
import FriendItem from './FriendItem';
import Radium from 'radium';
import { MAX_OUTPUT } from '../utils/constants';

const style = {
  contentStyle: {
    flex: '3',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '@media (max-width: 1050px)': {
      flex: '1 1 100%'
    }
  },
  noDataWrapper: {
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
  }
};

const emptyResult = (hasFriends, query) => {
  return <div style={style.noDataWrapper}>{hasFriends ? `No results for: "${query}"` : `No friends to show`}</div>;
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

const FriendList = (props) => (
  <div style={style.contentStyle}>
    {renderFriends(props)}
  </div>
);

export default Radium(FriendList);
