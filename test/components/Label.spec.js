import React from 'react';
import { shallow } from 'enzyme';
import Label from '../../src/components/Label';

describe('(Components) Label', () => {
  let _component;
  const _props = {
    text: 'Likes',
    icon: 'fa fa-thumbs-o-up',
    top: '26px',
    value: 12
  };

  beforeEach(() => {
    _component = shallow(<Label {..._props} />);
  });

  it('Should render a parent <div>', () => {
    expect(_component.type()).to.eql('div');
  });

  it('Should render an icon', () => {
    expect(_component.find('i')).to.have.length(1);
  });

  it('Should render a span', () => {
    expect(_component.find('span').text()).to.equal('12');
  });
});
