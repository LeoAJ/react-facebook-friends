import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../src/components/Spinner';

describe('(Components) Spinner', () => {
  let _component;

  beforeEach(() => {
    _component = shallow(<Spinner />);
  });

  it('Should render a parent <div>', () => {
    expect(_component.type()).to.eql('div');
  });
});
