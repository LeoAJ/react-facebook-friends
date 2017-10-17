import React from 'react';
import renderer from 'react-test-renderer';
import FriendItem from '../../src/components/FriendItem';

test('FriendItem component should renders correctly', () => {
  const props = {
    name: 'name',
    rank: 1,
    link: 'link',
    url: 'url',
    LIKE: 1,
    COMMENT: 2,
    POST: 3
  };
  const component = renderer.create(<FriendItem {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
