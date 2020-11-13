import { roll } from 'e';

import { ItemBank } from '../../../meta/types';
import Bank from '../../../structures/Bank';
import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import RareDropTable from '../../subtables/RareDropTable';
import TreeHerbSeedTable from '../../subtables/TreeHerbSeedTable';

const VorkathBoltTipTable = new LootTable()
	.add('Diamond bolt tips', [25, 30], 10)
	.add('Emerald bolt tips', [25, 30], 8)
	.add('Ruby bolt tips', [25, 30], 8)
	.add('Dragonstone bolt tips', [25, 30], 6)
	.add('Onyx bolt tips', [25, 30], 3)
	.add('Sapphire bolt tips', [25, 30], 2);

const VorkathTable = new LootTable()
	.every('Superior dragon bones')
	.every('Blue dragonhide')

	/* Weapons and armour */
	.add('Rune longsword', [2, 3], 5)
	.add('Rune kiteshield', [2, 3], 5)
	.add('Battlestaff', [5, 15], 4)
	.add('Dragon battleaxe', 1, 2)
	.add('Dragon longsword', 1, 2)
	.add('Dragon platelegs', 1, 2)
	.add('Dragon plateskirt', 1, 2)

	/* Runes */
	.add('Chaos rune', [650, 1000], 6)
	.add('Death rune', [300, 500], 6)
	.add('Wrath rune', [30, 60], 3)

	/* Dragonhide */
	.add('Blue dragonhide', [25, 30], 8)
	.add('Green dragonhide', [25, 30], 7)
	.add('Red dragonhide', [20, 25], 7)
	.add('Black dragonhide', [15, 25], 7)

	/* Fletching materials */
	.add('Dragon bolts (unf)', [50, 100], 8)
	.add('Dragon dart tip', [10, 50], 6)
	.add('Dragonstone bolt tips', [11, 25], 5)
	.add('Onyx bolt tips', [5, 10], 4)
	.add('Rune dart tip', [75, 100], 3)
	.add('Dragon arrowtips', [25, 50], 3)
	.add(VorkathBoltTipTable, 1, 5)

	/* Other */
	.add(RareDropTable, 1, 5)
	.add(TreeHerbSeedTable, 1, 3)
	.add('Snapdragon seed')
	.add('Torstol seed')
	.add('Adamantite ore', [10, 30], 7)
	.add('Coins', [20000, 81000], 5)
	.add('Grapes', [250, 300], 5)
	.add('Magic logs', 50, 5)
	.add('Manta ray', [35, 55], 4)
	.add('Dragon bones', [15, 20], 4)
	.add('Diamond', [10, 20], 4)
	.add('Dragonstone', [2, 3], 3)
	.add('Wrath talisman', 1, 3);

export class Vorkath extends SimpleMonster {
	public kill(quantity = 1): ItemBank {
		const loot = new Bank();

		for (let i = 0; i < quantity; i++) {
			loot.add(VorkathTable.roll());
			loot.add(VorkathTable.roll());

			if (roll(50)) loot.add("Vorkath's head");
			if (roll(65)) loot.add('Clue scroll (elite)');
			if (roll(1000)) loot.add('Dragonbone necklace');
			if (roll(3000)) loot.add('Jar of decay');
			if (roll(3000)) loot.add('Vorki');
			if (roll(5000)) loot.add('Draconic visage');
			if (roll(5000)) loot.add('Skeletal visage');
		}

		return loot.values();
	}
}

export default new Vorkath({
	id: 8061,
	name: 'Vorkath',
	table: VorkathTable,
	aliases: ['vorkath', 'vorki', 'vork']
});
