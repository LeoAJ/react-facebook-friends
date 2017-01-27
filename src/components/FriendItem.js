// @flow
/* eslint quote-props: 0 */
import React, { PropTypes } from 'react';
import Label from './Label';
import '../style/FriendItem.css';
import type { FriendItemProp } from '../type';
import {
  POST as pType,
  LIKE as lType,
  COMMENT as cType,
  colors
} from '../utils/constants';

const comments: Object = {
  text: 'Comments',
  icon: 'fa fa-comments',
  top: '63px'
};

const labels: Object = {
  text: 'Likes',
  icon: 'fa fa-thumbs-o-up',
  top: '26px'
};

const posts: Object = {
  text: 'Posts',
  icon: 'fa fa-pencil',
  top: '100px'
};

const FriendItem = ({
  name,
  rank,
  link,
  url,
  LIKE,
  COMMENT,
  POST
}: FriendItemProp) => (
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
      <Label {...labels} value={LIKE} />
      <Label {...comments} value={COMMENT} />
      <Label {...posts} value={POST} />
    </div>
  </a>
);

export default FriendItem;
