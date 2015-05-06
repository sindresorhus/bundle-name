'use strict';
var runApplescript = require('run-applescript');

module.exports = function (bundleId, cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	var script = 'tell application "Finder" to set app_path to application file id "' + bundleId + '" as string\ntell application "System Events" to get value of property list item "CFBundleName" of property list file (app_path & ":Contents:Info.plist")';

	runApplescript(script, function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, res);
	});
};
