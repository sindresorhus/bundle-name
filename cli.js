#!/usr/bin/env node
'use strict';
var bundleName = require('./index');
var input = process.argv[2];

if (!input || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	return console.log('Usage\n  bundle-name <bundle id>\n\nExample\n  bundle-name com.apple.Safari\n  #=> Safari\n\nReturns the bundle name from a bundle identifier');
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	return console.log(require('./package').version);
}

bundleName(input, function (err, name) {
	if (err) {
		throw err;
	}

	process.stdout.write(name);
});
