'use strict';
const pkg = require('pkg-conf')

module.exports = async () => {
	return await pkg("scripts")
};

module.exports.sync = () =>{
	return pkg.sync("scripts")
}
