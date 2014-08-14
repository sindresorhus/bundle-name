#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var bundleName = require('./');
var argv = process.argv.slice(2);
var input = argv[0];

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    bundle-name <bundle-id>',
		'',
		'  Example',
		'    bundle-name com.apple.Safari',
		'    Safari'
	].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

bundleName(input, function (err, name) {
	if (err) {
		throw err;
	}

	console.log(name);
});
