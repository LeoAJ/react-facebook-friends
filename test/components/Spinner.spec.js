import TestUtils from 'react-addons-test-utils';
import Spinner from '../../src/components/Spinner';
import { shallowRender } from '../testHelper';

describe('(Components) Spinner', () => {

  let _component;

  beforeEach(() => {
    _component = shallowRender(Spinner);
  });

  it('Should render as a <div>', () => {
    expect(_component.type).to.equal('div');
  });

});
