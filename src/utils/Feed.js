
import { LIKE_POINT, COMMENT_POINT, POST_POINT, POST, LIKE, COMMENT } from './constants';

class Feed {

  constructor(currentUserId) {
    this.currentUserId = currentUserId;
    this.key = {};
    this.info = [];
  }

  add({ user, type, score = LIKE_POINT }) {

    const {
      id,
      name,
      link,
      picture: {
        data: {
          url
        }
      }
    } = user;

    if (id === this.currentUserId) {
      return;
    }

    if (type === COMMENT) {
      score = COMMENT_POINT;
    } else if (type === POST) {
      score = POST_POINT;
    }

    if (this.key.hasOwnProperty(id)) {

      // existed
      this.info[this.key[id]].score += score;
      this.info[this.key[id]][type]++;

    } else {

      // new
      this.key[id] = this.info.length;
      this.info.push({
        id,
        name,
        score,
        url,
        link,
        POST: type === POST ? 1 : 0,
        LIKE: type === LIKE ? 1 : 0,
        COMMENT: type === COMMENT ? 1 : 0
      });

    }

  }

  sortByScore() {
    return this.info.sort((a, b) => {
      return b.score - a.score;
    });
  }

  set userId(currentUserId) {
    this.currentUserId = currentUserId;
  }

}

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
