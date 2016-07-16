import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';
import Ribbon from '../../src/components/Ribbon';
import ErrMsg from '../../src/components/ErrMsg';
import Login from '../../src/components/Login';
import Spinner from '../../src/components/Spinner';
import Profile from '../../src/components/Profile';
import FriendList from '../../src/components/FriendList';

describe('(Components) App', () => {
  let _component;

  beforeEach(() => {
    _component = shallow(<App />);
  });

  it('Should render Ribbon', () => {
    expect(_component.find(Ribbon)).to.have.length(1);
  });

  it('By default should render Shinner component', () => {
    expect(_component.find(Spinner)).to.have.length(1);
  });

  it('Should render Err component if state is err', () => {
    _component.setState({ status: 'err' });
    expect(_component.find(ErrMsg)).to.have.length(1);
  });

  it('Should render Login component if state is unknown', () => {
    _component.setState({ status: 'unknown' });
    expect(_component.find(Login)).to.have.length(1);
  });

  it('Should render both Profile and FriendList component if state is connected', () => {
    _component.setState({ status: 'connected' });
    expect(_component.find(Profile)).to.have.length(1);
    expect(_component.find(FriendList)).to.have.length(1);
  });
});
