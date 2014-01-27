# bundle-name [![Build Status](https://travis-ci.org/sindresorhus/bundle-name.png?branch=master)](http://travis-ci.org/sindresorhus/bundle-name)

> Get [bundle name](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/TP40009249-109585) from a [bundle identifier](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-102070) (OS X): `com.apple.Safari` => `Safari`


## Install

```
npm install --save bundle-name
```


## Example

```js
var bundleName = require('bundle-name');

bundleName('com.apple.Safari');
//=> Safari
```


## CLI

You can also use it as a CLI app by installing it globally:

```
npm install --global bundle-name
```

### Usage

```
bundle-name com.apple.Safari
```

Which will output `Safari`.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
