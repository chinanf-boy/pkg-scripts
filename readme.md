# pkg-scripts [![Build Status](https://travis-ci.org/chinanf-boy/pkg-scripts.svg?branch=master)](https://travis-ci.org/chinanf-boy/pkg-scripts) [![codecov](https://codecov.io/gh/chinanf-boy/pkg-scripts/badge.svg?branch=master)](https://codecov.io/gh/chinanf-boy/pkg-scripts?branch=master)

> cli to show package.json scripts

[中文](./readme.md) | ~~[english](./readme.en.md)~~

## Install

```
npm i -g pkg-scripts
```

``` bash
pkg-scripts
```

![test](./test.png)

## Usage

```js
const pkgScripts = require('pkg-scripts');
//=> just return package.json scripts

await pkgScripts(); // Promise
pkgScripts.sync(); // sync

```


## API

### pkgScripts

 name: | pkgScripts
---------|----------
Type: | `function:Promise`
Desc: | return package.json scripts

#### sync

 name: | sync
---------|----------
Type: | `function`
Desc: | return package.json scripts

### return

 name: | return
---------|----------
Type: | `Object`
Desc: | package.json scripts

## License

MIT © [chinanf-boy](http://llever.com)
