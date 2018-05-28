#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pkgScripts = require('./index');

const cli = meow(`
	Usage
	  $ pkg-scripts

	Show package.json scripts

`);

(async function(){
	let p = await pkgScripts()

	console.log(JSON.stringify(p,null,2));
})()


