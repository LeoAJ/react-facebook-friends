import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../src/components/Login';

test('Login component should renders correctly', () => {
  const props = {
    fBLogin: jest.fn()
  };
  const component = renderer.create(<Login {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
