import TestUtils from 'react-addons-test-utils';
import ErrMsg from '../../src/components/ErrMsg';
import { shallowRender, renderIntoDocument } from '../testHelper';

describe('(Components) ErrMsg', () => {

  let _component, _rendered;

  beforeEach(() => {

    _component = shallowRender(ErrMsg);
    _rendered = renderIntoDocument(ErrMsg);

  });

  it('Should render a parent <div>', () => {
    expect(_component.type).to.equal('div');
  });

  it('Should render a <div> as a title', () => {
    const div = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'div');
    expect(div[1]).to.exist;
    expect(div[1].textContent).to.match(/Error/);
  });

  it('Should render a <p> as a description', () => {
    const p = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'p');
    expect(p).to.exist;
    expect(p.textContent).to.match(/We are sorry but something went wrong, please try again later./);
  });

});
