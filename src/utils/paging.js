import reqwest from 'reqwest';
import getFeedInstance from '../utils/singleton';

const feedInstance = getFeedInstance();

function getPagingData(url) {
  return reqwest({ url });
}

function iterateData(data, type) {
  data.forEach(item => feedInstance.add({ user: item.from || item, type }));
}

export async function collectDataWithPaging({ data, paging }, type) {

  try {

    if (paging.next) {

      const pagingData = await getPagingData(paging.next);
      data = data.concat(pagingData.data);
      await collectDataWithPaging({ data, paging: pagingData.paging }, type);

    } else {

      // terminate recursion
      iterateData(data, type);
      return;

    }

  } catch (e) {
    console.error(e);
    throw e;
  }

}
