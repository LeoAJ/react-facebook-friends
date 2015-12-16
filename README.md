# react-facebook-friends

[![David](https://img.shields.io/david/LeoAJ/react-facebook-friends.svg?style=flat-square)](https://david-dm.org/LeoAJ/react-facebook-friends)
[![David](https://img.shields.io/david/dev/LeoAJ/react-facebook-friends.svg?style=flat-square)](https://david-dm.org/LeoAJ/react-facebook-friends#info=devDependencies)
[![Travis](https://img.shields.io/travis/LeoAJ/react-facebook-friends.svg?style=flat-square)](https://travis-ci.org/LeoAJ/react-facebook-friends)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/LeoAJ/react-facebook-friends/blob/master/LICENSE)

web app to rank your friendship on Facebook with React

## Detail

To know more detail, please read my [post](http://leoj.js.org/personal/React-iTunes-Search/).

## How to use ES7 feature with babel 6

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

```
npm start
```
and go to `localhost:3000`

## Deploy

```
npm run deploy
```

## Lint

use eslint

```
npm run lint
```

## Test

use karma

```
npm test
```

## Contribution

Feel free to open an issue or submit a PR if there is anything wrong or can be improved.

## License

MIT
