import TestUtils from 'react-addons-test-utils';
import FriendItem from '../../src/components/FriendItem';
import { shallowRender, renderIntoDocument } from '../testHelper';

describe('(Components) FriendItem', () => {

  let _component, _rendered, _props;

  beforeEach(() => {

    _props = {
      name: 'Leo Hsieh',
      rank: 3,
      link: 'mock_link',
      url: 'http://leoj.js.org',
      LIKE: 1,
      COMMENT: 2,
      POST: 3
    };
    _component = shallowRender(FriendItem, _props);
    _rendered = renderIntoDocument(FriendItem, _props);

  });

  it('Should render a parent <div>', () => {
    expect(_component.type).to.equal('a');
  });

  it('Should render an anchor tag', () => {
    const anchor = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'a');
    expect(anchor).to.exist;
  });

  it('Should render an image', () => {
    const img = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'img');
    expect(img).to.exist;
  });

  it('Should render a <div> for rank', () => {
    const div = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'div');
    expect(div[0]).to.exist;
    expect(div[0].textContent).to.match(/3/);
  });

  it('Should render a <div> for name', () => {
    const div = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'div');
    expect(div[2]).to.exist;
    expect(div[2].textContent).to.match(/Leo Hsieh/);
  });

});
