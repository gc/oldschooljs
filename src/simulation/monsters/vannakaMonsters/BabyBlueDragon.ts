import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const BabyBlueDragonTable = new LootTable().every('Babydragon bones');

export default new SimpleMonster({
	id: 241,
	name: 'Baby blue Dragon',
	table: BabyBlueDragonTable,
	aliases: ['baby blue dragon']
});
