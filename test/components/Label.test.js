import React from 'react';
import renderer from 'react-test-renderer';
import Label from '../../src/components/Label';

test('Label component should renders correctly', () => {
  const props = {
    text: 'test',
    icon: 'icon',
    top: '5',
    value: '1'
  };
  const component = renderer.create(<Label {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
