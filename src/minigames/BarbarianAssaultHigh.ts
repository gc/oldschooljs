import LootTable from '../structures/LootTable';
import SimpleMinigame from '../structures/SimpleMinigame';

const BarbarianAssaultHighTable = new LootTable()
	.addItem('Ranarr weed', [20, 30], 1)
	.addItem('Snapdragon', [20, 30], 1)
	.addItem('Torstol', [20, 30], 1)
	.addItem('Ranarr seed', [3, 4], 1)
	.addItem('Snapdragon seed', [3, 4], 1)
	.addItem('Torstol seed', [3, 4], 1)
	.addItem('Watermelon seed', 50, 1)
	.addItem('Palm tree seed', [1, 2], 1)
	.addItem('Magic seed', 1, 1)
	.addItem('Archer helm', 1, 1)
	.addItem('Berserker helm', 1, 1)
	.addItem('Warrior helm', 1, 1)
	.addItem('Farseer helm', 1, 1)
	.addItem('Granite shield', 1, 1)
	.addItem('Granite helm', 1, 1)
	.addItem('Rune kiteshield', 1, 1)
	.addItem('Coal', 750, 1)
	.addItem('Runite ore', 20, 1)
	.addItem('Runite bar', 15, 1)
	.addItem('Dragon bones', [50, 75], 1)
	.addItem('Black dragonhide', [30, 50], 1)
	.addItem('Uncut diamond', [25, 30], 1)
	.addItem('Magic logs', [50, 100], 1)
	.addItem('Mahogany plank', [60, 80], 1)
	.addItem('Rune arrow', [400, 500], 1)
	.addItem('Raw shark', [250, 300], 1)
	.addItem('Shark', [75, 125], 1)
	.addItem('Law rune', [250, 300], 1)
	.addItem('Blood rune', [250, 300], 1)
	.addItem('Limpwurt root', [30, 50], 1)
	.addItem('Unicorn horn', [30, 50], 1)
	.addItem('Coins', [50000, 75000], 1)
	.oneIn(16000, 'Dragon med helm')
	.oneIn(16000, 'Dragon chainbody')
	.tertiary(15, 'Clue scroll (elite)')
	.tertiary(1000, 'Pet penance queen');

export default new SimpleMinigame({
	name: 'Barbarian Assault High Gamble',
	table: BarbarianAssaultHighTable,
	aliases: [
		'barb high gamble',
		'high gamble',
		'barb high',
		'barbarian assault high',
		'barbarian assault high gamble'
	]
});
