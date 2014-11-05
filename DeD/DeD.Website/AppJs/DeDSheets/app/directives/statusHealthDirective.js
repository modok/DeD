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