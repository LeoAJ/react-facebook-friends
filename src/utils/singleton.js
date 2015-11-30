import Feed from './Feed';

// singleton
function singleton() {
  let instance;
  return {
    get(currentUserId) {

      if (!instance) {
        instance = new Feed(currentUserId);
      }

      if (!instance.currentUserId) {
        instance.userId = currentUserId;
      }

      return instance;
    }
  };
};

export default singleton().get;
