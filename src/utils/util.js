/*global FB*/

import getFeedInstance from './Feed';
import { POST, LIKE, COMMENT } from './constants';
import { collectDataWithPaging } from './paging';

function analyze({ feed, tagged }, feedInstance) {

  const taggedIds = tagged.data.map(tag => tag.id);
  const promises = feed.data.map((item) => {

    return new Promise((resolve, reject) => {

      // ignore tagged by friends
      if (taggedIds.indexOf(item.id) === -1) {

        try {

          // count likes
          item.likes && collectDataWithPaging(item.likes, LIKE);

          // count comments
          item.comments && collectDataWithPaging(item.comments, COMMENT);

        } catch (e) {
          console.error(e);
          reject(e);
        }

        // count posts
        feedInstance.add({
          feedId: item.id,
          user: item.from,
          type: POST
        });

      }

      resolve();

    });

  });

  return Promise.all(promises);

}

export function getData() {

  // &debug=all

  return new Promise((resolve, reject) => {

    const sm = 100,
          md = 200,
          fbName = `name`,
          fbLink = `link`,
          fbSmPicture = `picture.width(${sm}).height(${sm})`,
          fbMdPicture = `picture.width(${md}).height(${md})`,
          fbFromUser = `from{${fbName},${fbLink},${fbSmPicture}}`;

    FB.api(`/me?fields=${fbName},cover,${fbLink},${fbMdPicture},
            friends,
            tagged,
            feed{likes{${fbName},${fbLink},${fbSmPicture}},
            comments{${fbFromUser}},
            ${fbFromUser}}`, (response) => {

      if (!response || response.error) {
        console.error(response.error);
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

            const feedInstance = getFeedInstance(id);
            const result = await analyze(response, feedInstance);

            resolve({
              profile: {
                total_count,
                name,
                link,
                url
              },
              myFriends: feedInstance.sortByScore()
            });

          } catch (e) {
            console.error(e);
            reject(e);
          }

        })();

      }

    });

  });

}
