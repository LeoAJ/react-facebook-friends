import React from 'react';
import { shallow } from 'enzyme';
import FriendItem from '../../src/components/FriendItem';
import FriendList from '../../src/components/FriendList';

describe('(Components) FriendList', () => {
  let _component, _props;

  beforeEach(() => {
    _props = {
      myFriends: [{
        name: 'roy'
      },
      {
        name: 'alice'
      }],
      query: undefined
    };
    _component = shallow(<FriendList {..._props} />);
  });

  it('Should render a parent <div>', () => {
    expect(_component.type()).to.eql('div');
  });

  it('if there is no search query, it should render all list of friends', () => {
    expect(_component.find(FriendItem)).to.have.length(2);
  });

  it('if search query provided, it should filter and render the result', () => {
    _component.setProps({ query: 'roy' });
    expect(_component.find(FriendItem)).to.have.length(1);
  });
});
