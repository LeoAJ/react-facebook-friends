import reqwest from 'reqwest';
import getFeedInstance from './Feed';
import { LIKE } from './constants';

const feedInstance = getFeedInstance();

function getPagingData(url) {
  return reqwest({ url });
}

function iterateData(data, type) {

  data.forEach((item) => {

    feedInstance.add({
      user: type === LIKE ? item : item.from,
      type: type
    });

  });

}

export function collectDataWithPaging({data, paging}, type) {

  if (paging.next) {

    (async () => {

      try {

        const pagingData = await getPagingData(paging.next);

        data = data.concat(pagingData.data);

        collectDataWithPaging({
          data,
          paging: pagingData.paging
        }, type);

      } catch (e) {
        console.error(e);
        throw new Error(e);
      }

    })();

  } else {

    // terminate recursion
    iterateData(data, type);
  }

}
