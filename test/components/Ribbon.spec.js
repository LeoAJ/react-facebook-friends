import React from 'react';
import { shallow } from 'enzyme';
import Ribbon from '../../src/components/Ribbon';

describe('(Components) Ribbon', () => {
  let _component;

  beforeEach(() => {
    _component = shallow(<Ribbon />);
  });

  it('Should render a parent <div>', () => {
    expect(_component.type()).to.eql('div');
  });

  it('Should render an anchor tag and show "Fork me on Github"', () => {
    expect(_component.find('a').text()).to.equal('Fork me on Github');
  });
});
