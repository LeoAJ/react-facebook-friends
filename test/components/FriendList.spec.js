import TestUtils from 'react-addons-test-utils';
import FriendList from '../../src/components/FriendList';
import { shallowRender, renderIntoDocument } from '../testHelper';

describe('(Components) FriendList', () => {

  let _component, _rendered, _props;

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
    _component = shallowRender(FriendList, _props);


  });

  it('Should render a parent <div>', () => {
    expect(_component.type).to.equal('div');
  });

  it('if there is no search query, it should render all list of friends', () => {
    _rendered = renderIntoDocument(FriendList, _props);
    const anchor = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'a');
    expect(anchor.length).to.equal(2);
  });

  it('if search query provided, it should filter and render the result', () => {
    _props.query = 'roy';
    _rendered = renderIntoDocument(FriendList, _props);
    const anchor = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'a');
    expect(anchor.length).to.equal(1);
  });
  
});
