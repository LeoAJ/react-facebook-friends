import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../../src/components/Profile';

test('Profile component should renders correctly', () => {
  const props = {
    link: 'link',
    name: 'test',
    total_count: 1,
    url: 'url'
  };
  const component = renderer.create(<Profile {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
