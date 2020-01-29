import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareSeedTable from '../subtables/RareSeedTable';
import { GemTable } from '../subtables/RareDropTable';
import HerbDropTable from '../subtables/HerbDropTable';

const AberrantSpectreHerbTable = new LootTable()
	.add(HerbDropTable, 1, 11)
	.add([[HerbDropTable], [HerbDropTable]], 1, 11)
	.add([[HerbDropTable], [HerbDropTable], [HerbDropTable]], 1, 4);

export const AberrantSpectreTable = new LootTable(128)

	/*Weapons and armour */
	.addItem('Steel axe', 1, 3)
	.addItem('Mithril kiteshield', 1, 1)
	.addItem('Lava battlestaff', 1, 1)
	.addItem('Adamant platelegs', 1, 1)
	.addItem('Rune full helm', 1, 1)
	.oneIn(512, 'Mystic robe bottom (dark)')

	/* Herbs */
	.add(AberrantSpectreHerbTable, undefined, 78)

	/* Seeds */
	.add(RareSeedTable, undefined, 19)

	/* Coins */
	.addItem('Coins', 460, 1)

	/* Rdt */
	.add(GemTable, undefined, 5)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 2,
	name: 'Aberrant Spectre',
	table: AberrantSpectreTable,
	aliases: ['aberrant', 'aberrant spectre', 'spectres']
});
