import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../src/components/App';

jest.mock('../../src/utils/apiConfig', () => ({
  apiConfig: _ => {}
}));

test('App component should renders correctly', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
