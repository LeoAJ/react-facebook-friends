export type FriendItemProp = {
  name: string,
  rank: number,
  link: string,
  url: string,
  LIKE: number,
  COMMENT: number,
  POST: number
};

export type AppState = {
  status: string,
  profile?: Object,
  myFriends?: Object,
  query?: string
};
