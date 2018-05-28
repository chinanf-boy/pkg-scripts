# pkg-scripts [![Build Status](https://travis-ci.org/chinanf-boy/pkg-scripts.svg?branch=master)](https://travis-ci.org/chinanf-boy/pkg-scripts) [![codecov](https://codecov.io/gh/chinanf-boy/pkg-scripts/badge.svg?branch=master)](https://codecov.io/gh/chinanf-boy/pkg-scripts?branch=master) [![explain](http://llever.com/explain.svg)](https://github.com/chinanf-boy/pkg-scripts-explain)

> cli to show package.json scripts

[中文](./readme.md) | ~~[english](./readme.en.md)~~

## Install



```
npm i -g pkg-scripts
```




## Usage

```js
const pkgScripts = require('pkg-scripts');

pkgScripts('unicorns');
//=> 'unicorns & rainbows'
```


## API

### pkgScripts(input, [options])

#### input

name: | input
---------|----------
Type: | `string`
Desc: | Lorem ipsum.

#### options

##### foo

 name: | foo
---------|----------
Type: | `boolean`
Default: | `false`
Desc: | Lorem ipsum.


## CLI

```
npm install --global pkg-scripts
```

```
$ pkg-scripts --help

  Usage
    pkg-scripts [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ pkg-scripts
    unicorns & rainbows
    $ pkg-scripts ponies
    ponies & rainbows
```


## License

MIT © [chinanf-boy](http://llever.com)
