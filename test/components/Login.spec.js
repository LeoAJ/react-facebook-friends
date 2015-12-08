import TestUtils from 'react-addons-test-utils';
import Login from '../../src/components/Login';
import { shallowRender, renderIntoDocument } from '../testHelper';

describe('(Components) Login', () => {

  let _component, _rendered, _props, _spy;

  beforeEach(() => {
    _spy = {
      FB_login: sinon.spy()
    };
    _props = {
      FB_login: _spy.FB_login
    };
    _component = shallowRender(Login, _props);
    _rendered = renderIntoDocument(Login, _props);

  });

  it('Should render a parent <div>', () => {
    expect(_component.type).to.equal('div');
  });

  it('Should render a <h4> as a title', () => {
    const h4 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h4');
    expect(h4).to.exist;
    expect(h4.textContent).to.match(/Facebook required your permission to do further action/);
  });

  it('Should render a <button>', () => {
    const button = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'button');
    expect(button).to.exist;
    expect(button.textContent).to.match(/Agree/);
  });

  it('Should execute "FB_login" function while button get clicked', () => {
    const button = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'button');
    _spy.FB_login.should.have.not.been.called;
    TestUtils.Simulate.click(button);
    _spy.FB_login.should.have.been.called;
  });

});
