/* eslint react/forbid-prop-types: 0 */
import React, { PropTypes } from 'react';
import FriendItem from './FriendItem';
import { MAX_OUTPUT } from '../utils/constants';
import '../style/FriendList.css';

const emptyResult = (hasFriends, query) => {
  return (
    <div className="nodata">
      {hasFriends ? `No results for: "${query}"` : 'No friends to show'}
    </div>
  );
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

const FriendList = props => (
  <div className="wrapper">
    {renderFriends(props)}
  </div>
);

FriendList.propTypes = {
  myFriends: PropTypes.array.isRequired,
  query: PropTypes.string
};

export default FriendList;
