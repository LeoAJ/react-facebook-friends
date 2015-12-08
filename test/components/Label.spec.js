import TestUtils from 'react-addons-test-utils';
import Label from '../../src/components/Label';
import { shallowRender, renderIntoDocument } from '../testHelper';

describe('(Components) Label', () => {

  let _component, _rendered, _props;

  beforeEach(() => {

    _props = {
      text: 'Likes',
      icon: 'fa fa-thumbs-o-up',
      top: '26px',
      value: 12
    };
    _component = shallowRender(Label, _props);
    _rendered = renderIntoDocument(Label, _props);

  });

  it('Should render a parent <div>', () => {
    expect(_component.type).to.equal('div');
  });

  it('Should render an icon', () => {
    const icon = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'i');
    expect(icon).to.exist;
  });

  it('Should render a span', () => {
    const span = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'span');
    expect(span).to.exist;
    expect(span.textContent).to.match(/12/);
  });

  it('Should render a div for text', () => {
    const div = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'div');
    expect(div[2]).to.exist;
    expect(div[2].textContent).to.match(/Likes/);
  });

});
