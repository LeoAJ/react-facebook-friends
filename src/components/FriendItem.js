import React, { Component } from 'react';
import Label from './Label';

class FriendItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { name, rank, url, LIKE, COMMENT, POST } = this.props;

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
        padding: '1em 1em',
        borderBottom: '1px solid #eee'
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
        margin: '10px',
        display: 'inline-block'
      },
      img: {
        border: '1px solid rgb(59, 89, 152)',
        borderRadius: '3px'
      },
      name: {

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
        {/* RANK */}
        <div style={style.rank}>{rank}</div>
        <div style={style.imgWrapper}>
          <img src={url} alt={name} style={style.img} />
        </div>
        {/* <div style={style.name}>{name}</div> */}
        {/* LIKE */}
        <Label type={'like'} value={LIKE} />
        {/* COMMENT */}
        <Label type={'comment'} value={COMMENT} />
        {/* POST */}
        <Label type={'post'} value={POST} />
        <div style={style.clear}></div>
      </div>
    );
  }
}

export default FriendItem;
