import TestUtils from 'react-addons-test-utils';
import Profile from '../../src/components/Profile';
import emitter from '../../src/utils/emitter';
import { shallowRender, renderIntoDocument } from '../testHelper';

describe('(Components) Profile', () => {

  let _component, _rendered, _props;

  beforeEach(() => {

    _props = {
      name: 'Leo',
      link: 'mock_link',
      url: 'http://leoj.js.org/',
      total_count: 123
    };
    _component = shallowRender(Profile, _props);
    _rendered = renderIntoDocument(Profile, _props);

  });

  it('Should render a parent <div>', () => {
    expect(_component.type).to.equal('div');
  });

  it('Should render an anchor', () => {
    const anchor = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'a');
    expect(anchor).to.exist;
  });

  it('Should render a img', () => {
    const img = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'img');
    expect(img).to.exist;
  });

  it('Should render a h1 for name', () => {
    const h1 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.match(/Leo/);
  });

  it('Should render a h3 for total count', () => {
    const h3 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h3');
    expect(h3).to.exist;
    expect(h3.textContent).to.match(/You have 123 friends on Facebook/);
  });

  it('Should render an input box', () => {
    const input = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'input');
    expect(input).to.exist;
  });

  it('Should emit an event when onChange event trigger on input box', () => {
    const input = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'input');
    emitter.emit = sinon.spy();
    TestUtils.Simulate.change(input);
    emitter.emit.should.have.been.called;
  });

});
