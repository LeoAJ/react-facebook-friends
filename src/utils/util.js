/*global FB*/

import async from 'async';
import getFeedInstance from './Feed';
import { POST, LIKE, COMMENT } from './constants';
import { collectDataWithPaging } from './paging';

function analyze({ feed, tagged }, currentUserId) {

  const taggedIds = tagged.data.map(tag => tag.id);
  const feedInstance = getFeedInstance(currentUserId);

  return new Promise((resolve, reject) => {

    async.each(feed.data, (item, callback) => {

      // ignore tagged by friends
      if (taggedIds.indexOf(item.id) === -1) {

        // count likes
        item.likes && collectDataWithPaging(item.likes, LIKE);

        // count comments
        item.comments && collectDataWithPaging(item.comments, COMMENT);

        // count posts
        feedInstance.add({
          feedId: item.id,
          user: item.from,
          type: POST
        });

      }

      callback();

    }, (err) => {

      if (err) {
        reject(err);
      } else {
        resolve(feedInstance.sortByScore());
      }

    });

  });

}

export function getData() {

  return new Promise((resolve, reject) => {

    FB.api(`/me?fields=name,cover,link,picture.width(200).height(200),
          friends,
          tagged,
          feed{likes{name,link,picture.width(100).height(100)},
          comments{from{name,link,picture.width(100).height(100)}},
          from{name,link,picture.width(100).height(100)}}&debug=all`, (response) => {

      // console.log(response);

      if (!response || response.error) {
        reject(response.error);
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
        } = response;

        (async () => {

          try {
            const result = await analyze(response, id);
            resolve({
              profile: {
                total_count,
                name,
                link,
                url
              },
              myFriends: result
            });
          } catch (e) {
            reject(e);
          }

        })();

      }

    });

  });

}
