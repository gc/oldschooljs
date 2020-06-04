import {
	PrayerPageTable,
	GiveHalfKeyTable,
	GildedTable,
	FirelighterTable,
	TeleportScrollTable,
	BlessingTable
} from './General';
import LootTable from '../../structures/LootTable';
import Clue from '../../structures/Clue';
import { NumberKeyedBank } from '../../meta/types';
import Loot from '../../structures/Loot';
import { rand, roll } from '../../util/util';

export const MasterGodSwordOrnTable = new LootTable()
	.add('Armadyl godsword ornament kit')
	.add('Bandos godsword ornament kit')
	.add('Zamorak godsword ornament kit')
	.add('Saradomin godsword ornament kit');

export const MasterSubAnkouOutfitTable = new LootTable()
	.add('Ankou mask')
	.add('Ankou top')
	.add('Ankou leggings')
	.add('Ankou gloves')
	.add('Ankou socks');

export const MasterAnkouOutfitTable = new LootTable()
	.add('Coins', [15000, 30000], 2)
	.add(MasterSubAnkouOutfitTable);

export const MasterSubMummyOutfitTable = new LootTable()
	.add("Mummy's head")
	.add("Mummy's body")
	.add("Mummy's legs")
	.add("Mummy's hands")
	.add("Mummy's feet");

export const MasterMummyOutfitTable = new LootTable()
	.add('Coins', [15000, 30000], 2)
	.add(MasterSubMummyOutfitTable);

export const MasterSubDragonOrnTable = new LootTable()
	.add('Dragon kiteshield ornament kit')
	.add('Dragon platebody ornament kit', undefined, 2);

export const MasterDragonOrnTable = new LootTable()
	.add('Coins', [15000, 30000], 9)
	.add(MasterSubDragonOrnTable);

export const Master3rdageTable = new LootTable()
	.add('3rd age range coif')
	.add('3rd age range top')
	.add('3rd age range legs')
	.add('3rd age vambraces')
	.add('3rd age robe top')
	.add('3rd age robe')
	.add('3rd age mage hat')
	.add('3rd age amulet')
	.add('3rd age platelegs')
	.add('3rd age platebody')
	.add('3rd age full helmet')
	.add('3rd age plateskirt')
	.add('3rd age kiteshield')
	.add('3rd age longsword')
	.add('3rd age druidic cloak')
	.add('3rd age wand')
	.add('3rd age bow')
	.add('3rd age druidic staff')
	.add('3rd age druidic cloak')
	.add('3rd age druidic robe top')
	.add('3rd age druidic robe bottoms')
	.add('3rd age pickaxe')
	.add('3rd age axe');

export const MasterMegaRareTable = new LootTable()
	.add('Gilded scimitar')
	.add('Bucket helm (g)')
	.add('Gilded boots')
	.add('Ring of coins')
	.add('Cabbage', 3)
	.add('Anti-venom+(4)', 15)
	.add('Torstol', 50)
	.add('Gilded coif')
	.add("Gilded d'hide vambraces")
	.add("Gilded d'hide body")
	.add("Gilded d'hide chaps")
	.add('Gilded Pickaxe')
	.add('Gilded Axe')
	.add('Gilded spade')
	.add(Master3rdageTable)
	.add(GildedTable);

export const MasterRareTable = new LootTable()
	.add('Left eye patch')
	.add('Bowl wig')
	.add('Ale of the gods')
	.add('Half moon spectacles')
	.add('Fancy tiara')
	.add('Hood of darkness')
	.add('Robe top of darkness')
	.add('Gloves of darkness')
	.add('Robe bottom of darkness')
	.add('Boots of darkness')
	.add('Obsidian cape (r)')
	.add('Occult ornament kit')
	.add('Torture ornament kit')
	.add('Dragon defender ornament kit')
	.add('Samurai kasa')
	.add('Samurai shirt')
	.add('Samurai greaves')
	.add('Samurai boots')
	.add('Samurai gloves')
	.add('Arceuus hood')
	.add('Hosidius hood')
	.add('Lovakengj hood')
	.add('Piscarilius hood')
	.add('Shayzien hood')
	.add('Lesser demon mask')
	.add('Greater demon mask')
	.add('Black demon mask')
	.add('Jungle demon mask')
	.add('Old demon mask')
	.add('Anguish ornament kit')
	.add('Tormented ornament kit')
	.add(MasterMegaRareTable)
	.add(PrayerPageTable)
	.add(MasterGodSwordOrnTable)
	.add(MasterAnkouOutfitTable)
	.add(MasterMummyOutfitTable)
	.add(MasterDragonOrnTable);

export const MasterSeedTable = new LootTable()
	.add('Magic seed', [1, 2])
	.add('Yew seed', [1, 2])
	.add('Palm tree seed', [1, 2]);

export const MasterStandardTable = new LootTable()
	.add('Coins', [20000, 35000])
	.add('Manta ray', [15, 25])
	.add('Nature rune', [100, 200])
	.add('Death rune', [100, 200])
	.add('Blood rune', [100, 200])
	.add('Soul rune', [100, 200])
	.add('Limpwurt root', [40, 60])
	.add('Purple sweets', [14, 33])
	.add('Runite ore', [5, 8])
	.add('Wine of Zamorak', [35, 50])
	.add('Grimy toadflax', [25, 35])
	.add('Grimy ranarr weed', [5, 10])
	.add('Grimy snapdragon', [5, 10])
	.add('Runite bar', [5, 7])
	.add('Onyx bolts (e)', [15, 25])
	.add('Dragon dagger')
	.add('Dragon longsword')
	.add('Dragon battleaxe')
	.add('Dragon scimitar')
	.add('Dragon halberd')
	.add('Black dragonhide', [5, 25])
	.add('Dragon mace')
	.add(PrayerPageTable)
	.add(FirelighterTable)
	.add(TeleportScrollTable, 1, 2)
	.add(MasterSeedTable)
	.add(GiveHalfKeyTable)
	.add(BlessingTable);

export const MasterClueTable = new LootTable()
	.add(MasterStandardTable, undefined, 22)
	.add(MasterRareTable, undefined, 1);

export class MasterCasket extends Clue {
	public open(quantity = 1): NumberKeyedBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			if (roll(1000)) loot.add('Bloodhound');

			const numberOfRolls = rand(5, 7);

			for (let i = 0; i < numberOfRolls; i++) {
				loot.add(MasterClueTable.roll());
			}
		}

		return loot.values();
	}
}

export default new MasterCasket();
