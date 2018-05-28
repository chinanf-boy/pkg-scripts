import test from 'ava';
import m,{sync} from './index';

test('async', async t => {
	let res = await m()
	let l = Object.keys(res).length
	t.is(l, 7)
});

test('sync', async t => {
	let res = sync()
	let l = Object.keys(res).length
	t.is(l, 7)
});
