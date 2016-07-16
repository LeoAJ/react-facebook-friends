import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../src/components/Profile';
import emitter from '../../src/utils/emitter';

describe('(Components) Profile', () => {
  let _component;
  const _props = {
    name: 'Leo',
    link: 'mock_link',
    url: 'http://leoj.js.org/',
    total_count: 123
  };

  beforeEach(() => {
    _component = shallow(<Profile {..._props} />);
  });

  it('Should render a parent <div>', () => {
    expect(_component.type()).to.eql('div');
  });

  it('Should render an anchor', () => {
    expect(_component.find('a')).to.have.length(1);
  });

  it('Should render a img', () => {
    expect(_component.find('img')).to.have.length(1);
  });

  it('Should render a h1 for name', () => {
    expect(_component.find('h1').text()).to.equal('Leo');
  });

  it('Should render a h3 for total count', () => {
    expect(_component.find('h3').text()).to.equal('You have 123 friends on Facebook');
  });

  it('Should render an input box', () => {
    expect(_component.find('input')).to.have.length(1);
  });
});
