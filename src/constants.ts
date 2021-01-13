export const BASE_API_URL = 'http://services.runescape.com';

export const SKILLS = [
	'overall',
	'attack',
	'defence',
	'strength',
	'hitpoints',
	'ranged',
	'prayer',
	'magic',
	'cooking',
	'woodcutting',
	'fletching',
	'fishing',
	'firemaking',
	'crafting',
	'smithing',
	'mining',
	'herblore',
	'agility',
	'thieving',
	'slayer',
	'farming',
	'runecraft',
	'hunter',
	'construction'
];

export const enum SkillsEnum {
	Attack = 'attack',
	Defence = 'defence',
	Strength = 'strength',
	Hitpoints = 'hitpoints',
	Ranged = 'ranged',
	Prayer = 'prayer',
	Magic = 'magic',
	Cooking = 'cooking',
	Woodcutting = 'woodcutting',
	Fletching = 'fletching',
	Fishing = 'fishing',
	Firemaking = 'firemaking',
	Crafting = 'crafting',
	Smithing = 'smithing',
	Mining = 'mining',
	Herblore = 'herblore',
	Agility = 'agility',
	Thieving = 'thieving',
	Slayer = 'slayer',
	Farming = 'farming',
	Runecraft = 'runecraft',
	Hunter = 'hunter',
	Construction = 'construction'
}

export const MINIGAMES = ['bountyHunter', 'bountyHunterRogue', 'LMS'];

export const CLUES = ['all', 'beginner', 'easy', 'medium', 'hard', 'elite', 'master'];

export const mappedBossNames: [string, string][] = [
	['abyssalSire', 'Abyssal Sire'],
	['alchemicalHydra', 'Alchemical Hydra'],
	['barrowsChests', 'Barrows Chests'],
	['bryophyta', 'Bryophyta'],
	['callisto', 'Callisto'],
	['cerberus', 'Cerberus'],
	['chambersofXeric', 'Chambers of Xeric'],
	['chambersofXericChallengeMode', 'Chambers of Xeric: Challenge Mode'],
	['chaosElemental', 'Chaos Elemental'],
	['chaosFanatic', 'Chaos Fanatic'],
	['commanderZilyana', 'Commander Zilyana'],
	['corporealBeast', 'Corporeal Beast'],
	['crazyArchaeologist', 'Crazy Archaeologist'],
	['dagannothPrime', 'Dagannoth Prime'],
	['dagannothRex', 'Dagannoth Rex'],
	['dagannothSupreme', 'Dagannoth Supreme'],
	['derangedArchaeologist', 'Deranged Archaeologist'],
	['generalGraardor', 'General Graardor'],
	['giantMole', 'Giant Mole'],
	['grotesqueGuardians', 'Grotesque Guardians'],
	['hespori', 'Hespori'],
	['kalphiteQueen', 'Kalphite Queen'],
	['kingBlackDragon', 'King Black Dragon'],
	['kraken', 'Kraken'],
	['kreeArra', "Kree'Arra"],
	['krilTsutsaroth', "K'ril Tsutsaroth"],
	['mimic', 'Mimic'],
	['nightmare', 'The Nightmare'],
	['obor', 'Obor'],
	['sarachnis', 'Sarachnis'],
	['scorpia', 'Scorpia'],
	['skotizo', 'Skotizo'],
	['theGauntlet', 'The Gauntlet'],
	['theCorruptedGauntlet', 'The Corrupted Gauntlet'],
	['theatreofBlood', 'Theatre of Blood'],
	['thermonuclearSmokeDevil', 'Thermonuclear Smoke Devil'],
	['tzKalZuk', 'TzKal-Zuk'],
	['tzTokJad', 'TzTok-Jad'],
	['venenatis', 'Venenatis'],
	['vetion', "Vet'ion"],
	['vorkath', 'Vorkath'],
	['wintertodt', 'Wintertodt'],
	['zalcano', 'Zalcano'],
	['zulrah', 'Zulrah']
];

export const bossNameMap: Map<string, string> = new Map(mappedBossNames);

// Hiscores

function hiscoreURL(type: string): string {
	return `${BASE_API_URL}/m=${type}/index_lite.ws?player=`;
}

export const hiscoreURLs: Record<string, string> = {
	normal: hiscoreURL('hiscore_oldschool'),
	ironman: hiscoreURL('hiscore_oldschool_ironman'),
	ultimate: hiscoreURL('hiscore_oldschool_ultimate'),
	hardcore: hiscoreURL('hiscore_oldschool_hardcore_ironman'),
	deadman: hiscoreURL('hiscore_oldschool_deadman'),
	seasonal: hiscoreURL('hiscore_oldschool_seasonal')
};

export const ACCOUNT_TYPES: string[] = [
	'normal',
	'ironman',
	'ultimate',
	'hardcore',
	'deadman',
	'seasonal'
];

// Errors

export enum Errors {
	INVALID_USERNAME = 'INVALID_USERNAME',
	INVALID_ACCOUNT_TYPE = 'INVALID_ACCOUNT_TYPE',
	ACCOUNT_NOT_FOUND = 'ACCOUNT_NOT_FOUND',
	FAILED_REQUEST = 'FAILED_REQUEST'
}

export const ErrorDescriptions: Record<string, string> = {
	INVALID_USERNAME: 'A malformed, invalid or incorrect username was passed and rejected.',
	INVALID_ACCOUNT_TYPE: 'A invalid account type (normal, ironman, etc) was passed.',
	ACCOUNT_NOT_FOUND: 'Could not find a RuneScape account with the provided username.',
	FAILED_REQUEST: 'A request to an API/External resource failed unexpectedly.',
	ITEM_NOT_FOUND: 'No item with the provided ID/Name could be found.'
};

export const OSRS_BOX_BASE_URL = `https://www.osrsbox.com/osrsbox-db`;

export const EMPTY_BIRD_NEST_ID = 5075;
