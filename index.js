'use strict';
var execFile = require('child_process').execFile;

module.exports = function (bundleId, cb) {
	var script = 'tell application "Finder" to set app_path to application file id "' + bundleId + '" as string\ntell application "System Events" to get value of property list item "CFBundleName" of property list file (app_path & ":Contents:Info.plist")';

	execFile('osascript', ['-e', script], function (err, stdout) {
		if (err) {
			return cb(err);
		}

		cb(err, stdout.trim());
	});
};
