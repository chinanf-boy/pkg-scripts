#!/usr/bin/env node

'use strict';
const pkgScripts = require('.');
const signale = require('signale');

(async function () {
	let pObj = await pkgScripts()
	let pArr = Object.keys(pObj)
	const chalk = require('chalk')

	let options = {
		types: {
		  test: {
			color: 'yellow',
			label: 'test'
		  },
		  build: {
			color: 'blue',
			label: 'build'
		  },
		  start: {
			color: 'redBright',
			label: 'start'
		  },
		  dev: {
			color: 'magenta',
			label: 'dev'
			},
			watch: {
				color: 'cyan',
				label: 'watch'
			}
		}
	  };

	const scripts = new signale.Signale(options)

	let pre = [] // precommit
	let one = [] // build
	let two = [] // signale default
	let thr = [] // other

	let preOptions = {
		types: {
			pre: {
			  badge: '...',
			  color: 'yellow'
			},
		}
	  };

	const preScripts = new signale.Signale(preOptions)

	pArr.forEach(name => {
		if(name.startsWith('pre')){
			pre.push(name) // 0
		}else if(scripts[name]){
			one.push(name) // 1
		}else{
			signale[name] ?
			(two.push(name)) : // 2
			(thr.push(name))  // 3
		}
	})

	const log  = console.log.bind(console)
	log()

// 0
	pre.length &&
	pre.map(name =>{
		preScripts._scopeName = name
		preScripts['pre'](pObj[name])
	}) &&
	log()

// 1
	one.length &&
	one.map(name =>scripts[name](pObj[name])) &&
	log()

// 2
	two.length &&
	two.map(name =>signale[name](pObj[name])) &&
	log()

// 3
	thr.length &&
	thr.map(name =>signale._log(chalk.green(name)+": "+pObj[name])) &&
	log()





})()
