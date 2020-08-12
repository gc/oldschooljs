import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';

const SeaSnakeHatchlingTable = new LootTable()
	.every('Bones')

	/* Runes and ammunition */
	.add('Water rune', 15, 2)
	.add('Mist rune', 1, 2)
	.add('Broad arrows', 4, 2)

	/* Coins */
	.add('Coins', 44, 60)
	.add('Coins', 32, 11)
	.add('Coins', 24, 9)
	.add('Coins', 23, 7)

	/* Other */
	.add('Adamant dart tip', 2, 10)
	.add('Fishing bait', 50, 4)
	.add('Pearl bolt tips', 3, 4)
	.add('Raw bass', 2, 4)
	.add('Water orb', 1, 3)
	.add('Raw lobster', 1, 2)
	.add('Seaweed', 5, 2)
	.add('Edible seaweed', 5, 2)
	.add('Oyster pearl', 2, 1)
	.add('Oyster pearls', 1, 1)
	.add('Casket', 1, 1)

	/* Gem drop table */
	.add(GemTable, 1, 1)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (medium)');

export default new SimpleMonster({
	id: 1098,
	name: 'Sea Snake Hatchling',
	table: SeaSnakeHatchlingTable,
	aliases: ['sea snake hatchling']
});
