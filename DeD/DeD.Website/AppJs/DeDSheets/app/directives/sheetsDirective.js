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