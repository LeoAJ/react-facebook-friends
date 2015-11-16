import React, { Component } from 'react';
import Radium from 'radium';

class Label extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let text, icon = 'fa';
    const { type, value } = this.props,
          style = {
            wrapper: {
              margin: value < 10 ? '0 25px' : '0 10px',
              display: 'inline-block',
              '@media (max-width: 48em)': {
                display: 'none'
              }
            },
            label: {
              fontSize: '1.5em',
              textAlign: 'center'
            },
            value: {
              margin: '3px',
            },
            valueGroup: {
              fontSize: '4em'
            }
          };

    if (type === 'like') {
      text = 'Likes';
      icon += ' fa-thumbs-o-up';
    } else if (type === 'comment') {
      text = 'Comments';
      icon += ' fa-comments';
    } else if (type === 'post') {
      text = 'Posts';
      icon += ' fa-pencil';
    }

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
