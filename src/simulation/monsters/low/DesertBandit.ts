import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const DesertBanditTable = new LootTable()
	.add('Coins', 30, 70)
	.add('Antipoison(1)', 1, 15)
	.add('Lockpick', 1, 15);

export default new SimpleMonster({
	id: 2283,
	name: 'Desert Bandit',
	pickpocketTable: DesertBanditTable,
	aliases: ['desert bandit']
});
