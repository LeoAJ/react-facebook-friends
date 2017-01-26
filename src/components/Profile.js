import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import emitter from '../utils/emitter';
import '../style/Profile.css';

type ProfileProp = {
  name: string,
  link: string,
  url: string,
  total_count: number
};

class Profile extends Component {

  props: ProfileProp;

  changeHandler = (e: SyntheticInputEvent): void => emitter.emit('search', e.target.value); // eslint-disable-line no-undef

  shouldComponentUpdate = (nextProps: Object): boolean => shallowCompare(this, nextProps);

  render() {
    const { name, link, url, total_count } = this.props;
    const renderSearchBox = () => {
      return total_count === 0
            ? null
            : <input
              placeholder="Search friends"
              className="searchInput"
              onChange={this.changeHandler}
              autoFocus
            />;
    };

    return (
      <div className="flexContainer">
        <div className="profileStyle">
          <div className="headerStyle">
            <a target="_blank" rel="noopener noreferrer" href={link}>
              <img src={url} alt="" className="imgStyle" />
            </a>
            <h1 className="nameStyle">{name}</h1>
            <h3 className="countStyle">You have {total_count} friends on Facebook</h3>
            {renderSearchBox()}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
