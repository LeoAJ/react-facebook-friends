import React, { PropTypes } from 'react';
import Label from './Label';
import { POST as pType, LIKE as lType, COMMENT as cType } from '../utils/constants';
import '../style/FriendItem.css';


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
  <a target="_blank" href={link} className="anchor" rel="noopener noreferrer">
    <div
      style={{ backgroundColor: colors[(rank - 1) % 10] }}
      className="rank"
    >
      {rank}
    </div>
    <div className="imgWrapper">
      <img src={url} alt={name} className="img" />
      <div className="name">{name}</div>
    </div>
    <div className="labelWrapper">
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
