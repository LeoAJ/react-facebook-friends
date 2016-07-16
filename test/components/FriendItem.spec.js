import React from 'react';
import { shallow } from 'enzyme';
import FriendItem from '../../src/components/FriendItem';
import Label from '../../src/components/Label';

describe('(Components) FriendItem', () => {
  let _component;
  const _props = {
    name: 'Leo Hsieh',
    rank: 3,
    link: 'mock_link',
    url: 'http://leoj.js.org',
    LIKE: 1,
    COMMENT: 2,
    POST: 3
  };

  beforeEach(() => {
    _component = shallow(<FriendItem {..._props} />);
  });

  it('Should render a parent <a>', () => {
    expect(_component.type()).to.eql('a');
  });

  it('Should render an image', () => {
    expect(_component.find('img')).to.have.length(1);
  });

  it('Should render 3 Label component', () => {
    expect(_component.find(Label)).to.have.length(3);
  });
});
