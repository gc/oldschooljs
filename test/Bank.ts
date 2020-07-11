import test from 'tape';
import {
	resolveNameBank,
	bankFromLootTableOutput,
	bankHasItem,
	bankHasAllItemsFromBank,
	removeItemFromBank,
	removeBankFromBank,
	addItemToBank,
	addBanks,
	addArrayToBank,
	multiplyBank
} from '../dist/util';

test('convert string bank to number bank', t => {
	t.plan(1);
	const strBank = {
		Toolkit: 2,
		'Ammo Mould': 4,
		Candle: 1
	};
	const numBank = {
		1: 2,
		4: 4,
		36: 1
	};
	t.deepEqual(resolveNameBank(strBank), numBank);
});

test('convert loot item array to number bank', t => {
	t.plan(1);
	const lootItems = [
		{
			item: 6,
			quantity: 2
		},
		{
			item: 67,
			quantity: 2
		},
		{
			item: 6,
			quantity: 8
		},
		{
			item: 32,
			quantity: 1
		}
	];
	const expected = {
		6: 10,
		32: 1,
		67: 2
	};
	t.deepEqual(bankFromLootTableOutput(lootItems), expected);
});

test('join a number of banks', t => {
	t.plan(1);
	const banks = [
		{
			45: 9,
			14: 4,
			36: 1
		},
		{
			1: 2,
			4: 4,
			36: 5
		},
		{
			1: 3,
			8: 4,
			87: 1
		}
	];
	const expected = {
		1: 5,
		4: 4,
		8: 4,
		14: 4,
		36: 6,
		45: 9,
		87: 1
	};

	t.deepEqual(addBanks(banks), expected);
});

test('bank contains item', test => {
	test.plan(4);
	const bank = { 1: 2, 3: 4 };

	test.true(bankHasItem(bank, 1), 'returns true on existing item');
	test.false(bankHasItem(bank, 2), 'returns false on non-existing item');
	test.true(bankHasItem(bank, 3, 3), 'returns true if more items than those specified exist');
	test.false(
		bankHasItem(bank, 1, 4),
		'returns false if bank has less items than the quantity provided'
	);
});
test('bank has all items', test => {
	test.plan(2);
	const bank1 = {
		45: 9,
		14: 4,
		36: 1
	};
	const bank2 = {
		45: 9,
		14: 4,
		36: 1
	};
	const bank3 = {
		1: 3,
		8: 4,
		87: 1
	};

	test.true(bankHasAllItemsFromBank(bank1, bank2));
	test.false(bankHasAllItemsFromBank(bank1, bank3));
});

test('remove item from bank', test => {
	test.plan(3);
	const bank = {
		45: 9,
		87: 1
	};

	test.deepEqual(
		removeItemFromBank(bank, 87),
		{
			45: 9
		},
		'deleting an element'
	);

	test.deepEqual(
		removeItemFromBank(bank, 98, 1),
		{
			45: 9,
			87: 1
		},
		'removing item that does not exist just returns the bank'
	);

	test.deepEqual(
		removeItemFromBank(bank, 45, 2),
		{
			45: 7,
			87: 1
		},
		'remove quantity from an item'
	);
});

test('remove bank from bank', test => {
	test.plan(1);
	const bank = {
		1: 5,
		4: 4,
		8: 4,
		14: 4,
		36: 6,
		45: 9,
		87: 1
	};

	const deleter = {
		1: 5,
		4: 4,
		8: 4,
		14: 4,
		36: 6
	};

	test.deepEqual(removeBankFromBank(deleter, bank), {
		45: 9,
		87: 1
	});
});

test('add item to bank', test => {
	test.plan(2);
	const bank = {
		45: 9,
		87: 1
	};

	const expected = {
		45: 9,
		69: 420,
		87: 1
	};

	const expectedInc = {
		45: 9,
		87: 2
	};

	test.deepEqual(addItemToBank(bank, 69, 420), expected, 'add new item');
	test.deepEqual(addItemToBank(bank, 87), expectedInc, 'increment item item');
});

test('add bank to bank', test => {
	test.plan(1);

	const bank = { 1: 2 };

	const bank2 = { 3: 4 };

	const expected = { 1: 2, 3: 4 };

	test.deepEqual(addBanks([bank, bank2]), expected);
});

test('add array of items to bank', test => {
	test.plan(1);

	const bank = { 1: 2 };

	const items = [3, 4, 5];

	const expected = { 1: 2, 3: 1, 4: 1, 5: 1 };

	test.deepEqual(addArrayToBank(bank, items), expected);
});

test('multiply bank items', test => {
	test.plan(1);

	const bank = { 1: 2, 3: 4 };

	const expected = { 1: 4, 3: 8 };

	test.deepEqual(multiplyBank(bank, 2), expected);
});
