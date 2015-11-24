import React, { Component, PropTypes } from 'react';
import Label from './Label';
import Radium from 'radium';
import { facebookBlue } from '../utils/constants';

class FriendItem extends Component {

  constructor(props) {
    super(props);
  }

  static PropTypes = {
    name: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    LIKE: PropTypes.string,
    COMMENT: PropTypes.string,
    POST: PropTypes.string
  }

  render() {

    const { name, rank, link, url, LIKE, COMMENT, POST } = this.props;

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

    const style = {
      item: {
        margin: '5px auto',
        maxWidth: '750px',
        backgroundColor: 'white',
        borderBottom: '1px solid #eee',
        '@media (max-width: 48em)': {
          position: 'relative'
        }
      },
      anchor: {
        padding: '1em 1em',
        display: 'block',
        color: 'black',
        ':hover': {
          backgroundColor: '#f7f7f7'
        }
      },
      rank: {
        position: 'relative',
        top: '-30px',
        marginRight: '10px',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: '4em',
        width: '80px',
        display: 'inline-block',
        color: 'white',
        borderRadius: '50%',
        backgroundColor: colors[(rank - 1) % 10]
      },
      imgWrapper: {
        padding: '10px',
        display: 'inline-block'
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
      clear: {
        clear: 'both'
      },
      label: {
        textAlign: 'center'
      },
      value: {
        fontSize: '6em'
      }
    };

    return (
      <div style={style.item}>
        <a target="_blank" href={link} style={style.anchor}>
          <div style={style.rank}>{rank}</div>
          <div style={style.imgWrapper}>
            <img src={url} alt={name} style={style.img} />
            <div style={style.name}>{name}</div>
          </div>
          <Label type={'like'} value={LIKE} />
          <Label type={'comment'} value={COMMENT} />
          <Label type={'post'} value={POST} />
          <div style={style.clear}></div>
        </a>
      </div>
    );
  }
}

export default Radium(FriendItem);
