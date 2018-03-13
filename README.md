# react-facebook-friends

[![Travis](https://img.shields.io/travis/LeoAJ/react-facebook-friends.svg?style=flat-square)](https://travis-ci.org/LeoAJ/react-facebook-friends)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/LeoAJ/react-facebook-friends/blob/master/LICENSE)

web app to rank, quantify your FaceBook friendship based on human behavior with React

# Live Demo

http://leoj.js.org/react-facebook-friends/

## Detail

To know more detail, please read my [post](http://leoj.js.org/personal/React-iTunes-Search/).

## Installation

1. `git clone git@github.com:LeoAJ/react-facebook-friends.git`
2. `cd react-facebook-friends`
3. `yarn`

## Dev

Register a Facebook App first [here](https://developers.facebook.com/docs/apps/register), and replace your app ID [here](https://github.com/LeoAJ/react-facebook-friends/blob/master/config/index.js#L2).

For this app, you will need to require `email`, `public_profile`, `user_friends` and `user_posts` those permission from Facebook in order to run the app.

Then do,

```
yarn start
```
and go to `localhost:3000`

## Deploy

```
yarn deploy
```

## Lint

run eslint, using [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) rules.

```
yarn lint
```

## Test

run `Jest`

```
npm test
```

## Built with

* React
* Babel 6
* ES6
* ES7 (async/await)
* [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)
* Flexbox
* Webpack
* Flow
* Eslint
* Jest
* Facebook API

## Contribution

Issue, idea, PR are welcomed.

## License

MIT
