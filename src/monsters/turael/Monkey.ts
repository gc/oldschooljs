import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';

export const MonkeyTable = new LootTable().every('Monkey bones');
export default new SimpleMonster({
	id: 23,
	name: 'Monkey',
	table: MonkeyTable,
	aliases: ['Monkey']
});
