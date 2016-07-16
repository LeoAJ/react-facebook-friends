import React from 'react';
import { shallow } from 'enzyme';
import ErrMsg from '../../src/components/ErrMsg';

describe('(Components) ErrMsg', () => {
  let _component;

  beforeEach(() => {
    _component = shallow(<ErrMsg />);
  });

  it('Should render a parent <div>', () => {
    expect(_component.type()).to.eql('div');
  });
});
