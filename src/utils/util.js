/* global FB */

import getFeedInstance from './singleton';
import { collectDataWithPaging } from './paging';
import { POST, LIKE, COMMENT } from './constants';

const generatePromiseForFeed = (taggedIds, feedInstance) => item => new Promise(async (resolve, reject) => {
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
  } catch (err) {
    reject(err);
  }
});

// return list of promises
function analyze({ feed = { data: [] }, tagged = { data: [] } }, feedInstance) {
  const taggedIds = tagged.data.map(tag => tag.id);
  return feed.data.map(generatePromiseForFeed(taggedIds, feedInstance));
}

const getDataPromiseCallback = (resolve, reject) => {
  const sm = 100;
  const md = 200;
  const fbName = 'name';
  const fbLink = 'link';
  const fbSmPicture = `picture.width(${sm}).height(${sm})`;
  const fbMdPicture = `picture.width(${md}).height(${md})`;
  const fbFromUser = `from{${fbName},${fbLink},${fbSmPicture}}`;
  FB.api(
    `/me?fields=${fbName},
    cover,
    ${fbLink},
    ${fbMdPicture},
    friends,
    tagged,
    feed{likes{${fbName},${fbLink},${fbSmPicture}},
    comments{${fbFromUser}},
    ${fbFromUser}}`,
    async resp => {
      if (!resp || resp.error) return reject(resp.error);
      try {
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
        } = resp;
        const feedInstance = getFeedInstance(id);
        // corner case! check if user has friends
        total_count && await Promise.all(analyze(resp, feedInstance));
        resolve({
          profile: {
            total_count,
            name,
            link,
            url
          },
          myFriends: (total_count && feedInstance.sortByScore()) || []
        });
      } catch (err) {
        reject(err);
      }
    }
  );
};

export function getData() {
  return new Promise(getDataPromiseCallback);
}
