# bundle-name [![Build Status](https://travis-ci.org/sindresorhus/bundle-name.png?branch=master)](http://travis-ci.org/sindresorhus/bundle-name)

> Get [bundle name](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleName) from a [bundle identifier](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleIdentifier) (OS X): `com.apple.Safari` => `Safari`


## Install

```sh
$ npm install --save bundle-name
```


## Usage

```js
var bundleName = require('bundle-name');

bundleName('com.apple.Safari', function (err, name) {
	console.log(name);
	//=> Safari
});
```


## CLI

```sh
$ npm install --global bundle-name
```

```sh
$ bundle-name --help

  Usage
    $ bundle-name <bundle-id>

  Example
    $ bundle-name com.apple.Safari
    Safari
```


## Related

See [bundle-id](https://github.com/sindresorhus/bundle-id) for the inverse.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
