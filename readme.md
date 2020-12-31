# bundle-name

> Get [bundle name](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleName) from a [bundle identifier](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleIdentifier) (macOS): `com.apple.Safari` → `Safari`


## Install

```
$ npm install --save bundle-name
```


## Usage

```js
const bundleName = require('bundle-name');

bundleName('com.apple.Safari').then(name => {
	console.log(name);
	//=> 'Safari'
});
```


## Related

- [bundle-name-cli](https://github.com/sindresorhus/bundle-name-cli) - CLI for this module
- [bundle-id](https://github.com/sindresorhus/bundle-id) - Get bundle identifier from a bundle name


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
