import test from 'ava';
import bundleName from './index.js';

test('main', async t => {
	t.is(await bundleName('com.apple.Safari'), 'Safari');
});
