///#source 1 1 /AppJs/DeDSheets/app/modules.js
angular.module('DeDSheets.controllers', []);
angular.module('DeDSheets.directives', []);
///#source 1 1 /AppJs/DeDSheets/app/controllers/c.mainCtrl.js
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
.directive('statisticsAndProfix', [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			stats: '=',
			profix: '='
		},
		templateUrl: '/AppJs/DeDSheets/app/views/directives/statisticsAndProfixDirective.html',
		link: function (scope) { }

	}
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
///#source 1 1 /AppJs/DeDSheets/app/run.js
angular.module('DeDSheets', [
	'DeDSheets.controllers',
	'DeDSheets.directives'
]).run();
