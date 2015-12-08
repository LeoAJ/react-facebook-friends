import TestUtils from 'react-addons-test-utils';
import Ribbon from '../../src/components/Ribbon';
import { shallowRender, renderIntoDocument } from '../testHelper';

describe('(Components) Ribbon', () => {

  let _component, _rendered;

  beforeEach(() => {

    _component = shallowRender(Ribbon);
    _rendered = renderIntoDocument(Ribbon);

  });

  it('Should render a parent <div>', () => {
    expect(_component.type).to.equal('div');
  });

  it('Should render an anchor tag and show "Fork me on Github"', () => {
    const anchor = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'a');
    expect(anchor).to.exist;
    expect(anchor.textContent).to.match(/Fork me on Github/);
  });


});
