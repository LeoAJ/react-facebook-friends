import { LIKE_POINT, COMMENT_POINT, POST_POINT, POST, LIKE, COMMENT } from './constants';

class Data {

  constructor(currentUserId) {
    this.currentUserId = currentUserId;
    this.key = {};
    this.info = [];
  }

  add({ feedId, user, type, score = LIKE_POINT }) {

    const {
      id,
      name,
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

  getKey() {
    return this.key;
  }

  getInfo() {
    return this.info;
  }

}

export default Data;
