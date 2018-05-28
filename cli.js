#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pkgScripts = require('.');

const cli = meow(`
	Usage
	  $ pkg-scripts [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ pkg-scripts
	  unicorns & rainbows
	  $ pkg-scripts ponies
	  ponies & rainbows
`);

console.log(pkgScripts(cli.input[0] || 'unicorns'));
