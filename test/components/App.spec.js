import TestUtils from 'react-addons-test-utils';
import App from '../../src/components/App';
import ErrMsg from '../../src/components/ErrMsg';
import Login from '../../src/components/Login';
import Spinner from '../../src/components/Spinner';
import Profile from '../../src/components/Profile';
import FriendList from '../../src/components/FriendList';
import { shallowRender, renderIntoDocument } from '../testHelper';

describe('(Components) App', () => {

  let _component, _rendered;

  beforeEach(() => {

    _component = shallowRender(App);
    _rendered = renderIntoDocument(App);

  });

  it('Should render a parent <div>', () => {
    expect(_component.type).to.equal('div');
  });

  it('By default should render Shinner component', () => {
    const spinner = TestUtils.findRenderedComponentWithType(_rendered, Spinner);
    expect(TestUtils.isCompositeComponentWithType(spinner, Spinner)).to.be.true;
  });

  it('Should render Err component if state is err', () => {
    _rendered.setState({ status: 'err' });
    const err = TestUtils.findRenderedComponentWithType(_rendered, ErrMsg);
    expect(TestUtils.isCompositeComponentWithType(err, ErrMsg)).to.be.true;
  });

  it('Should render Login component if state is unknown', () => {
    _rendered.setState({ status: 'unknown' });
    const login = TestUtils.findRenderedComponentWithType(_rendered, Login);
    expect(TestUtils.isCompositeComponentWithType(login, Login)).to.be.true;
  });

  it('Should render both Profile and FriendList component if state is connected', () => {
    _rendered.setState({
      status: 'connected',
      profile: {
        name: 'Leo',
        link: 'mock_link',
        url: 'http://leoj.js.org/',
        total_count: 123
      },
      myFriends: []
    });
    const profile = TestUtils.findRenderedComponentWithType(_rendered, Profile);
    const friendList = TestUtils.findRenderedComponentWithType(_rendered, FriendList);
    expect(TestUtils.isCompositeComponentWithType(profile, Profile)).to.be.true;
    expect(TestUtils.isCompositeComponentWithType(friendList, FriendList)).to.be.true;
  });

});
