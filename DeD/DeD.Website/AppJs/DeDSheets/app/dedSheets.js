///#source 1 1 /AppJs/DeDSheets/app/modules.js
angular.module('DeDSheets.controllers', []);
angular.module('DeDSheets.services', []);
angular.module('DeDSheets.directives', []);
///#source 1 1 /AppJs/DeDSheets/app/controllers/c.mainCtrl.js
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
			attacks: [],
			spells: [],
			equipment: [],
			traits: []
		};
	}
]);
///#source 1 1 /AppJs/DeDSheets/app/directives/attacksSpellcastingDirective.js
angular.module('DeDSheets.directives')
.directive('attacksSpellcasting', [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			attacks: '=',
			spells: '='
		},
		templateUrl: '/AppJs/DeDSheets/app/views/directives/attacksSpellcastingDirective.html',
		link: function (scope) { }

	}
}]);
///#source 1 1 /AppJs/DeDSheets/app/directives/columnDirective.js
angular.module('DeDSheets.directives')
	.directive('column', [function() {
	return {
		replace: true,
		restrict: 'E',
		transclude: true,
		scope: {},
		templateUrl: '/AppJs/DeDSheets/app/views/directives/columnDirective.html'
	}
}]);
///#source 1 1 /AppJs/DeDSheets/app/directives/otherProfixDirective.js
angular.module('DeDSheets.directives')
.directive('otherProfix', [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			profix:'='
		},
		templateUrl: '/AppJs/DeDSheets/app/views/directives/otherProfixDirective.html',
		link: function (scope) { }

	}
}]);
///#source 1 1 /AppJs/DeDSheets/app/directives/equipmentDirective.js
angular.module('DeDSheets.directives')
.directive('equipment', [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			objects:'='
		},
		templateUrl: '/AppJs/DeDSheets/app/views/directives/equipmentDirective.html',
		link: function (scope) { }

	}
}]);
///#source 1 1 /AppJs/DeDSheets/app/directives/sheetsDirective.js
angular.module('DeDSheets.directives')
.directive('sheets', [function () {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: {
			charName: '=',
			charClass: '=',
			level: '=',
			race: '=',
			playerName: '=',
			experience: '='
		},
		templateUrl: '/AppJs/DeDSheets/app/views/directives/sheetsDirective.html',
		link: function (scope) { }

	}
}]);
///#source 1 1 /AppJs/DeDSheets/app/directives/statisticsAndProfixDirective.js
angular.module('DeDSheets.directives')
.directive('statisticsAndProfix', ['statsService'
	, function (statsService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			stats: '=',
			profix: '='
		},
		templateUrl: '/AppJs/DeDSheets/app/views/directives/statisticsAndProfixDirective.html',
		link: function(scope) {
			scope.bonusByValue = function(value) {
				return statsService.bonusByValue(value);
			};
			scope.bonusByStat = function(code, stats) {
				return statsService.bonusByStat(code, stats);
			};
		}

	};
}]);
///#source 1 1 /AppJs/DeDSheets/app/directives/statusHealthDirective.js
angular.module('DeDSheets.directives')
.directive('statusHealth', [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			armorClass: '=',
			initiative: '=',
			speed: '=',
			currentHp: '=',
			maxHp: '=',
			tempHp: '='
		},
		templateUrl: '/AppJs/DeDSheets/app/views/directives/statusHealthDirective.html',
		link: function (scope) { }

	}
}]);
///#source 1 1 /AppJs/DeDSheets/app/directives/traitsDirective.js
angular.module('DeDSheets.directives')
.directive('traits', [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			traits: '='
		},
		templateUrl: '/AppJs/DeDSheets/app/views/directives/traitsDirective.html',
		link: function (scope) { }

	}
}]);
///#source 1 1 /AppJs/DeDSheets/app/services/statsService.js
angular.module('DeDSheets.services')
	.factory('statsService', [function () {
		return new function statsService() {
			var values = {
				"1": -5,
				"2": -4,
				"3": -4,
				"4": -3,
				"5": -3,
				"6": -2,
				"7": -2,
				"8": -1,
				"9": -1,
				"10": 0,
				"11": 0,
				"12": 1,
				"13": 1,
				"14": 2,
				"15": 2,
				"16": 3,
				"17": 3,
				"18": 4,
				"19": 4,
				"20": 5,
				"21": 5,
				"22": 6,
				"23": 6,
				"24": 7,
				"25": 7,
				"26": 8,
				"27": 8,
				"28": 9,
				"29": 9,
				"30": 10
			};
			this.bonusByStat = function (code, stats) {
				var value;
				angular.forEach(stats, function(stat) {
					if (stat.code === code) {
						value = stat.value;
						return;
					}
				});

				return values[value];
			};
			this.bonusByValue = function (value) {
				return values[value];
			};
		};
	}]);
///#source 1 1 /AppJs/DeDSheets/app/run.js
angular.module('DeDSheets', [
	'DeDSheets.controllers',
	'DeDSheets.directives',
	'DeDSheets.services'
]).run();
