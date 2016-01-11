# react-facebook-friends

[![David](https://img.shields.io/david/LeoAJ/react-facebook-friends.svg?style=flat-square)](https://david-dm.org/LeoAJ/react-facebook-friends)
[![David](https://img.shields.io/david/dev/LeoAJ/react-facebook-friends.svg?style=flat-square)](https://david-dm.org/LeoAJ/react-facebook-friends#info=devDependencies)
[![Travis](https://img.shields.io/travis/LeoAJ/react-facebook-friends.svg?style=flat-square)](https://travis-ci.org/LeoAJ/react-facebook-friends)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/LeoAJ/react-facebook-friends/blob/master/LICENSE)

web app to rank, quantify your FaceBook friendship based on human behavior with React

# Live Demo

http://leoj.js.org/react-facebook-friends/

## Detail

To know more detail, please read my [post](http://leoj.js.org/personal/React-iTunes-Search/).

## How to use ES7 feature with Babel 6

First thing first you need to figure out which ES7 feature you would like to use, for example, you want to use `object-rest-spread`.

1. npm install `babel-plugin-syntax-object-rest-spread` and `babel-plugin-transform-object-rest-spread`, the difference between syntax plugin and transform plugin is syntax plugin allowed the code to read the syntax only, if you want to transforms new syntax back to ES5 version, you will need transform plugin.

2. Put those plugins in your `.babelrc` file.

```
{
  "plugins": ["syntax-object-rest-spread", "transform-object-rest-spread"]
}
```

## Installation

1. `git clone git@github.com:LeoAJ/react-facebook-friends.git`
2. `cd react-facebook-friends`
3. `npm install`

## Dev

Register a Facebook App first [here](https://developers.facebook.com/docs/apps/register), and replace your app ID [here](https://github.com/LeoAJ/react-facebook-friends/blob/master/config/index.js#L2).

Then do,

```
npm start
```
and go to `localhost:3000`

## Deploy

```
npm run deploy
```

## Lint

```
npm run lint
```

## Test

```
npm test
```

## Built with

* React
* Babel 6
* ES6
* ES7 (async/await)
* [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)
* Inline CSS [(Radium)](http://stack.formidable.com/radium/)
* Flexbox
* Webpack
* Eslint
* Karma
* Facebook API

## Contribution

Issue, idea, PR are welcomed.

## License

MIT
