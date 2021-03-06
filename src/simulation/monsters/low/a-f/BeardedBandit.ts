import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';

export default new SimpleMonster({
	id: 736,
	name: 'Bearded Pollnivnian Bandit',
	table: new LootTable({ limit: 5 })
		.every('Bones')
		.add('Coins', [10, 300])
		.tertiary(257_211, 'Rocky'),
	pickpocketTable: new LootTable().add('Coins', 40),
	aliases: ['bearded pollnivnian bandit', 'pollnivnian bandit']
});
