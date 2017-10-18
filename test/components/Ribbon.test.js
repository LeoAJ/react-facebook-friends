import React from 'react';
import renderer from 'react-test-renderer';
import Ribbon from '../../src/components/Ribbon';

test('Ribbon component should renders correctly', () => {
  const component = renderer.create(<Ribbon />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
