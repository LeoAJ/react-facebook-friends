import reqwest from 'reqwest';
import getFeedInstance from '../utils/singleton';

const feedInstance = getFeedInstance();

const getPagingData = url => reqwest({ url });

const iterateData = (data, type) => data.forEach(item => feedInstance.add({ user: item.from || item, type }));

export async function collectDataWithPaging({ data, paging }, type) {
  try {
    if (paging.next) {
      const pagingData = await getPagingData(paging.next);
      const combinedData = data.concat(pagingData.data);
      await collectDataWithPaging({ data: combinedData, paging: pagingData.paging }, type);
    } else {
      // terminate recursion
      iterateData(data, type);
      return;
    }
  } catch (e) {
    throw e;
  }
}
