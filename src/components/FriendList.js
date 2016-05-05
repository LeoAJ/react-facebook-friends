import React, { PropTypes } from 'react';
import FriendItem from './FriendItem';
import { MAX_OUTPUT } from '../utils/constants';
import jss from 'jss';
import camelCase from 'jss-camel-case';

jss.use(camelCase());

const { classes } = jss.createStyleSheet({
  nodata: {
    fontSize: '1.5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    minHeight: '100vh',
  },
  wrapper: {
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  '@media (max-width: 1050px)': {
    wrapper: {
      flex: '1 1 100%'
    },
    nodata: {
      minHeight: 'auto'
    }
  }
}).attach();

const emptyResult = (hasFriends, query) => {
  return (
    <div className={classes.nodata}>
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

const FriendList = (props) => (
  <div className={classes.wrapper}>
    {renderFriends(props)}
  </div>
);

FriendList.propTypes = {
  myFriends: PropTypes.array.isRequired,
  query: PropTypes.string
};

export default FriendList;
