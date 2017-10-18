import React from 'react';
import renderer from 'react-test-renderer';
import ErrMsg from '../../src/components/ErrMsg';

test('ErrMsg component should renders correctly', () => {
  const component = renderer.create(<ErrMsg />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
