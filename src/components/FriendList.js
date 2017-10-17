// @flow
/* eslint react/forbid-prop-types: 0 */
import React, { PropTypes } from 'react';
import FriendItem from './FriendItem';
import { MAX_OUTPUT } from '../utils/constants';
import '../style/FriendList.css';
import type { FriendItemProp } from '../type';

type FriendListProp = {
  myFriends: Array<FriendItemProp>,
  query: string
};

const emptyResult = (hasFriends: boolean, query: string) => (
  <div className="nodata">
    {hasFriends ? `No results for: "${query}"` : 'No friends to show'}
  </div>
);

const FriendList = ({
  myFriends,
  query
}: FriendListProp) => {
  const result = myFriends.reduce((prev, curr, i) => {
    if (curr.name.match(new RegExp(query, 'i'))) {
      prev.push(<FriendItem key={curr.id} rank={i + 1} {...curr} />);
    }

    return prev;
  }, []);

  return (
    <div className="wrapper">
      {result.length ? result : emptyResult(!!myFriends.length, query)}
    </div>
  );
};

export default FriendList;
