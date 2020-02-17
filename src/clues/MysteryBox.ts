import LootTable from '../structures/LootTable';
import { ItemBank } from '../meta/types';
import Loot from '../structures/Loot';
import RareDropTable from '../monsters/subtables/RareDropTable';
import Clue from '../structures/Clue';

export const ClueTable = new LootTable()
	.addItem('Clue scroll (easy)', 1, 9)
	.addItem('Clue scroll (medium)', 1, 4)
	.addItem('Clue scroll (hard)', 1, 4);

export const MysteryBoxTable = new LootTable()
	.add('Old boot')
	.add('Flier')
	.add('Body rune')
	.add('Bucket')
	.add('Cabbage')
	.add('Onion')
	.add('Coins', [500, 3000])
	.add('Mithril scimitar')
	.add('Casket')
	.add('Steel platebody')
	.add('Diamond')
	.add('Nature rune', 20)
	.add(ClueTable)
	.add(RareDropTable)
	.oneIn(150, 'Rune sq shield')
	.oneIn(256, 'Stale baguette');

class MysteryBox extends Clue {
	public open(quantity = 1): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			const numberOfRolls = 1;
			for (let i = 0; i < numberOfRolls; i++) {
				loot.add(MysteryBoxTable.roll());
			}
		}

		return loot.values();
	}
}

export default new MysteryBox();
