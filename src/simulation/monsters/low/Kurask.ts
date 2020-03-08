import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import HerbDropTable from '../../subtables/HerbDropTable';
import { GemTable } from '../../subtables/RareDropTable';
import RareSeedTable from '../../subtables/RareSeedTable';

const KuraskTable = new LootTable({ limit: 124 })
	.every('Bones')

	/* Weapons and armor */
	.add('Mithril kiteshield', 1, 3)
	.add('Rune longsword', 1, 3)
	.add('Adamant platebody', 1, 3)
	.add('Rune axe', 1, 3)
	.oneIn(384, 'Leaf-bladed sword')
	.oneIn(512, 'Mystic robe top (light)')
	.oneIn(1026, 'Leaf-bladed battleaxe')

	/* Runes */
	.add('Nature rune', 10, 10)
	.add('Nature rune', 15, 7)
	.add('Nature rune', 30, 4)

	/* Herbs */
	.add(HerbDropTable, 3, 18)

	/* Seeds */
	.add(RareSeedTable, 1, 15)

	/* Other */
	.add('Coins', [2000, 5000], 16)
	.add('Flax', 100, 6)
	.add('White berries', 12, 6)
	.add('Coins', 10000, 5)
	.add('Big bones', 20, 5)
	.add('Papaya fruit', 10, 4)
	.add('Coconut', 10, 4)

	/* Rdt */
	.add(GemTable, 1, 6)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)')
	.tertiary(3000, 'Kurask head');

export default new SimpleMonster({
	id: 410,
	name: 'Kurask',
	table: KuraskTable,
	aliases: ['kurask']
});
