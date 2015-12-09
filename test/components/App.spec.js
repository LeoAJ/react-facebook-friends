import TestUtils from 'react-addons-test-utils';
import App from '../../src/components/App';
import Spinner from '../../src/components/Spinner';
import { shallowRender, renderIntoDocument } from '../testHelper';

describe('(Components) App', () => {

  let _component, _rendered, _props;

  beforeEach(() => {

    _component = shallowRender(App);
    _rendered = renderIntoDocument(App);

  });

  it('Should render a parent <div>', () => {
    expect(_component.type).to.equal('div');
  });

  // it('By default should render Shinner component', () => {
  //   expect(Spinner).should.have.been.calledOnce;
  // });

});
