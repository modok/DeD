angular.module('DeDSheets.controllers')
.controller('mainCtrl', ['$scope'
	, function ($scope) {
		$scope.char = {
			charClass: '',
			race: '',
			playerName: '',
			experience: '',
			stats: [],
			profix: [],
			otherProfix: [],
			status: {
				ac: '',
				init: '',
				speed: '',
				currentHp: '',
				maxHp: '',
				tempHp: ''
			},
			attacks: [],
			spells: [],
			equipment: [],
			traits: []
		};
	}
]);