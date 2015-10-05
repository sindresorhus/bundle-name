#!/usr/bin/env node
'use strict';
var meow = require('meow');
var bundleName = require('./');

var cli = meow([
	'Usage',
	'  $ bundle-name <bundle-id>',
	'',
	'Example',
	'  $ bundle-name com.apple.Safari',
	'  Safari'
]);

if (!cli.input[0]) {
	console.error('Bundle id required');
	process.exit(1);
}

bundleName(cli.input[0], function (err, name) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(name);
});
