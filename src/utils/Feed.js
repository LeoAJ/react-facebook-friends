
import { LIKE_POINT, COMMENT_POINT, POST_POINT, POST, LIKE, COMMENT, MAX_OUTPUT } from './constants';

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

  // sort and only output first 25 items
  sortByScore() {
    return this.info.sort((a, b) => b.score - a.score).slice(0, MAX_OUTPUT);
  }

  set userId(currentUserId) {
    this.currentUserId = currentUserId;
  }

}

export default Feed;
