/*global FB*/

import Data from './Data';
import { POST, LIKE, COMMENT } from './constants';

function parseData({feed, tagged}, currentUserId) {

  const taggedIds = tagged.data.map(tag => tag.id),
        result = new Data(currentUserId);

  feed.data.forEach((item) => {

    // ignore tagged by friends
    if (taggedIds.indexOf(item.id) !== -1) {
      return;
    }

    // count comments
    item.comments && item.comments.data.forEach((comment) => {

      result.add({
        feedId: item.id,
        user: comment.from,
        type: COMMENT
      });

    });

    // count likes
    item.likes && item.likes.data.forEach((like) => {
      result.add({
        feedId: item.id,
        user: like,
        type: LIKE
      });
    });

    // count posts
    result.add({
      feedId: item.id,
      user: item.from,
      type: POST
    });

  });

  return result.sortByScore();

}

export function getData() {

  return new Promise((resolve, reject) => {

    FB.api(`/me?fields=name,cover,link,picture.width(200).height(200),
          friends,
          tagged,
          feed{to,message,description,story,likes{name,picture.width(100).height(100)},
          comments{from{name,picture.width(100).height(100)}},
          from{name,picture.width(100).height(100)}}&debug=all`, (res) => {

      console.log(res);

      if (!res || res.error) {
        reject(res.error);
      } else {

        const {
          id,
          name,
          link,
          friends: {
            summary: {
              total_count
            }
          },
          picture: {
            data: {
              url
            }
          }
        } = res;

        resolve({
          profileData: {
            total_count,
            name,
            link,
            url
          },
          friendsData: parseData(res, id)
        });

      }

    });

  });

}
