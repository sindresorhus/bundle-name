'use strict';
var assert = require('assert');
var bundleName = require('./');

it('should get bundle name from bundle id', function (cb) {
	bundleName('com.apple.Safari', function (err, name) {
		console.log('Bundle name:', name);
		assert.equal(name, 'Safari');
		cb();
	});
});
