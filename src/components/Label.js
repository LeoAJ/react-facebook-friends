import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class Label extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }

  render() {

    const { type, value } = this.props;
    let text, top, icon = 'fa';

    if (type === 'like') {
      text = 'Likes';
      icon += ' fa-thumbs-o-up';
      top = '26px';
    } else if (type === 'comment') {
      text = 'Comments';
      icon += ' fa-comments';
      top = '63px';
    } else if (type === 'post') {
      text = 'Posts';
      icon += ' fa-pencil';
      top = '100px';
    }

    const style = {
      wrapper: {
        margin: value < 10 ? '0 25px' : '0 10px',
        display: 'inline-block',
        '@media (max-width: 48em)': {
          position: 'absolute',
          top: top,
          margin: value < 10 ? '0 25px' : '0 20px',
          backgroundColor: 'rgb(58, 87, 149)',
          color: 'white',
          padding: '5px',
          borderRadius: '3px'
        }
      },
      label: {
        fontSize: '1.5em',
        textAlign: 'center',
        '@media (max-width: 48em)': {
          fontSize: '0.75em',
          display: 'none'
        }
      },
      value: {
        margin: '3px',
      },
      valueGroup: {
        fontSize: '4em',
        '@media (max-width: 48em)': {
          fontSize: '1em'
        }
      }
    };

    return (
      <div style={style.wrapper}>
        <div style={style.valueGroup}>
          <i className={icon}></i>
          <span style={style.value}>{value}</span>
        </div>
        <div style={style.label}>{text}</div>
      </div>
    );
  }
}

export default Radium(Label);
