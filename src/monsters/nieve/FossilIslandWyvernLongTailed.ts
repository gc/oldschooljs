import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import TreeHerbSeedTable from '../subtables/TreeHerbSeedTable';

export const LongTailedWyvernTable = new LootTable()
	.every('Wyvern bones')
	.oneIn(512, 'Granite longsword')
	.oneIn(2560, 'Granite boots')

	/*Weapons and armour */
	.addItem('Air battlestaff', 1, 4)
	.addItem('Battlestaff', [3, 5], 3)
	.addItem('Adamant battleaxe', 1, 2)
	.addItem('Adamant full helm', 1, 2)
	.addItem('Rune pickaxe', 1, 2)
	.addItem('Adamant platebody', 1, 2)

	/* Runes and ammunition */
	.addItem('Adamant arrow', [38, 42], 6)
	.addItem('Water rune', 50, 4)
	.addItem('Chaos rune', 15, 4)
	.addItem('Law rune', 15, 4)
	.addItem('Death rune', 15, 4)
	.addItem('Death rune', 15, 4)
	.addItem('Soul rune', 10, 1)
	.addItem('Runite bolts', [12, 30], 1)

	/* Herbs */
	.oneIn(44, 'Grimy kwuarm', 2)
	.oneIn(55, 'Grimy cadantine', 2)
	.oneIn(55, 'Grimy dwarf weed', 2)
	.oneIn(62, 'Grimy ranarr weed')
	.oneIn(62, 'Grimy torstol')
	.oneIn(73, 'Grimy lantadyme', 2)

	/* Seeds */
	.add(TreeHerbSeedTable, undefined, 1)

	/* Resources */
	.addItem('Pure essence', 150, 8)
	.addItem('Adamantite bar', [2, 4], 6)
	.addItem('Teak logs', 35, 6)
	.addItem('Snape grass', [10, 15], 3)
	.addItem('Runite ore', [1, 2], 3)

	/* Other */
	.addItem('Coins', 3000, 11)
	.addItem('Lobster', 2, 8)
	.addItem('Prayer potion(4)', 1, 7)
	.addItem('Adamant crossbow (u)', 1, 2)
	.addItem('Calcite', 2, 2)
	.addItem('Pyrophosphite', 2, 2)
	.addItem('Volcanic ash', [20, 60], 2)

	/* Tertiary */
	.tertiary(2, 'Numulite', [4, 25])
	.tertiary(35, 'Unidentified small fossil')
	.tertiary(70, 'Unidentified medium fossil')
	.tertiary(87.5, 'Unidentified large fossil')
	.tertiary(118, 'Clue scroll (hard)')
	.tertiary(350, 'Unidentified rare fossil')
	.tertiary(12000, 'Wyvern visage');

export default new SimpleMonster({
	id: 7792,
	name: 'Long-tailed Wyvern',
	table: LongTailedWyvernTable,
	aliases: ['longtailed', 'longtailed wyvern', 'long-tailed wyvern']
});
