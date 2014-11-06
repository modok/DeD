angular.module('DeDSheets.controllers')
.controller('mainCtrl', ['$scope'
	, function ($scope) {
		$scope.char = {
			charName: 'Sidwin the Sharp',
			charClass: 'Rogue',
			race: 'Human',
			playerName: 'Michele',
			experience: '20',
			level: 1,
			stats: [
				{ name: 'strenght', value: 11, code: 'str' },
				{ name: 'dexterity', value: 16, code: 'dex' },
				{ name: 'constitution', value: 16, code: 'con' },
				{ name: 'intelligence', value: 14, code:'int' },
				{ name: 'wisdom', value: 11, code:'wis' },
				{ name: 'charisma', value: 18, code:'cha' }
			],
			profix: [
				{ name: 'Acrobatics', based: 'str'},
				{ name: 'Animal Handling', based: 'wis' },
				{ name: 'Arcana', based: 'int' },
				{ name: 'Athletics', based: 'str' },
				{ name: 'Deception', based: 'cha' },
				{ name: 'History', based: 'int' },
				{ name: 'Insight', based: 'wis' },
				{ name: 'Intimidation', based: 'cha' },
				{ name: 'Investigation', based: 'int' },
				{ name: 'Medicine', based: 'wis' },
				{ name: 'Nature', based: 'int' },
				{ name: 'Perception', based: 'wis' },
				{ name: 'Performance', based: 'cha' },
				{ name: 'Persuasion', based: 'cha' },
				{ name: 'Religion', based: 'int' },
				{ name: 'Sleight of Hand', based: 'dex' },
				{ name: 'Stealth', based: 'dex' },
				{ name: 'Survival', based: 'wis' }
			],
			otherProfix: [],
			status: {
				ac: 14,
				init: 3,
				speed: 30,
				currentHp: 11,
				maxHp: 11,
				hd: '8',
				tempHp: 0
			},
			spells: [],
			equipment: [
			{
				type: 'item',
				name: 'candles',
				qty: 20
			},
			{
				type: 'weapon',
				name: 'Rapier',
				qty: 1
			},
			{
				type: 'weapon',
				name: 'Short bow',
				qty: 1
			},
			{
				type: 'weapon',
				name: 'dagger',
				qty: 2
			},
			{
				type: 'ammo',
				name: 'arrows',
				qty: 40
			}
			],
			traits: []
		};
	}
]);