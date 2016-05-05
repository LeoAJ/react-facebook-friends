import React, { PropTypes } from 'react';
import Label from './Label';
import { facebookBlue, POST as pType, LIKE as lType, COMMENT as cType } from '../utils/constants';
import jss from 'jss';
import camelCase from 'jss-camel-case';

jss.use(camelCase());

const colors = {
  0: '#DB2828',
  1: '#F2711C',
  2: '#FBBD08',
  3: '#B5CC18',
  4: '#21BA45',
  5: '#00B5AD',
  6: '#2185D0',
  7: '#6435C9',
  8: '#A333C8',
  9: '#E03997',
  10: '#A5673F',
  11: '#767676',
  12: '#1B1C1D'
};

const { classes } = jss.createStyleSheet({
  anchor: {
    minWidth: '300px',
    borderRadius: '3px',
    marginTop: '5px',
    marginBottom: '5px',
    backgroundColor: 'white',
    maxWidth: '680px',
    padding: '1px 15px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    minHeight: '150px',
    justifyContent: 'space-around',
    color: 'black',
    ':hover': {
      backgroundColor: '#f7f7f7'
    }
  },
  rank: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: '4em',
    width: '80px',
    display: 'inline-block',
    color: 'white',
    borderRadius: '50%'
  },
  imgWrapper: {
    padding: '10px'
  },
  img: {
    border: '1px solid rgb(59, 89, 152)',
    borderRadius: '3px'
  },
  name: {
    textAlign: 'center',
    color: facebookBlue,
    fontWeight: 'bold',
    fontSize: '0.8em'
  },
  label: {
    textAlign: 'center'
  },
  value: {
    fontSize: '6em'
  },
  labelWrapper: {
    display: 'flex',
    '@media (max-width: 590px)': {
      flexWrap: 'wrap',
      minHeight: 'inherit',
      alignItems: 'center'
    }
  }
}).attach();

const labelMap = {
  c: {
    text: 'Comments',
    icon: 'fa fa-comments',
    top: '63px'
  },
  l: {
    text: 'Likes',
    icon: 'fa fa-thumbs-o-up',
    top: '26px'
  },
  p: {
    text: 'Posts',
    icon: 'fa fa-pencil',
    top: '100px'
  }
};

const FriendItem = ({ name, rank, link, url, LIKE, COMMENT, POST }) => (
  <a target="_blank" href={link} className={classes.anchor}>
    <div
      style={{ backgroundColor: colors[(rank - 1) % 10] }}
      className={classes.rank}
    >
      {rank}
    </div>
    <div className={classes.imgWrapper}>
      <img src={url} alt={name} className={classes.img} />
      <div className={classes.name}>{name}</div>
    </div>
    <div className={classes.labelWrapper}>
      <Label {...labelMap.l} value={LIKE} />
      <Label {...labelMap.c} value={COMMENT} />
      <Label {...labelMap.p} value={POST} />
    </div>
  </a>
);

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  LIKE: PropTypes.number.isRequired,
  COMMENT: PropTypes.number.isRequired,
  POST: PropTypes.number.isRequired
};

export default FriendItem;
