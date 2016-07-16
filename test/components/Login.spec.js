import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../src/components/Login';

describe('(Components) Login', () => {
  let _component;
  let sandbox;
  let spy;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    spy = sandbox.spy();
    _component = shallow(<Login fBLogin={spy} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('Should render a parent <div>', () => {
    expect(_component.type()).to.eql('div');
  });

  it('Should render a <h4> as a title', () => {
    expect(_component.find('h4').text()).to.equal('Facebook required your permission to do further action');
  });

  it('Should render a <button>', () => {
    expect(_component.find('button').text()).to.equal('Agree');
  });

  it('Should execute "fBLogin" function while button get clicked', () => {
    _component.find('button').simulate('click');
    expect(spy).to.have.been.calledOnce;
  });
});
