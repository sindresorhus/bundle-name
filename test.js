import test from 'ava';
import bundleName from './';

test(t => {
	t.plan(1);

	bundleName('com.apple.Safari', (err, name) => {
		console.log('Bundle name:', name);
		t.is(name, 'Safari');
	});
});
