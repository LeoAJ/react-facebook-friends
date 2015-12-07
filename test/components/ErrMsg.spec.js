import TestUtils from 'react-addons-test-utils';
import ErrMsg from '../../src/components/ErrMsg';
import { shallowRender, renderIntoDocument } from '../testHelper';

describe('(Components) ErrMsg', () => {

  let _component, _rendered;

  beforeEach(() => {

    _component = shallowRender(ErrMsg);
    _rendered = renderIntoDocument(ErrMsg);

  });

  it('Should render as a <div>', () => {
    expect(_component.type).to.equal('div');
  });

  it('Should render a <div> as a title', () => {
    const h6 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h6');
    expect(h6).to.exist;
    expect(h6.textContent).to.match(/Error!!/);
  });

  it('Should render a <p> as a description', () => {
    const p = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'p');
    expect(p).to.exist;
    expect(p.textContent).to.match(/We are sorry but something went wrong, please try again later./);
  });

});
