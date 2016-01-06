/*global FB*/

import getFeedInstance from './singleton';
import { collectDataWithPaging } from './paging';
import { POST, LIKE, COMMENT } from './constants';

// return list of promises
function analyze({ feed = { data: [] }, tagged = { data: [] } }, feedInstance) {

  const taggedIds = tagged.data.map(tag => tag.id);
  
  return feed.data.map((item) => {

    return new Promise((resolve, reject) => {

      (async () => {

        try {

          if (taggedIds.indexOf(item.id) < 0) {

            // count likes
            item.likes && await collectDataWithPaging(item.likes, LIKE);

            // count comments
            item.comments && await collectDataWithPaging(item.comments, COMMENT);

            // count posts
            feedInstance.add({
              feedId: item.id,
              user: item.from,
              type: POST
            });

          }

          resolve();

        } catch (e) {

          console.error(e);
          reject(e);

        }

      })()

    });

  });

}

export function getData() {

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
            // corner case! check if user has friends
            total_count && await Promise.all(analyze(response, feedInstance));

            resolve({
              profile: {
                total_count,
                name,
                link,
                url
              },
              myFriends: (total_count && feedInstance.sortByScore()) || []
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
