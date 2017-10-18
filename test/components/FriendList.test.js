import React from 'react';
import renderer from 'react-test-renderer';
import FriendList from '../../src/components/FriendList';

test('FriendList component should renders correctly', () => {
  const props = {
    myFriends: [{
      COMMENT: 3,
      LIKE: 1,
      POST: 2,
      id: '123',
      link: 'link',
      name: 'name',
      score: 30,
      url: 'url'
    }],
    query: 'q'
  };
  const component = renderer.create(<FriendList {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
