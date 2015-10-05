import test from 'ava';
import fn from './';

test(async t => {
	const name = await fn('com.apple.Safari');

	console.log('Bundle name:', name);
	t.is(name, 'Safari');
});
