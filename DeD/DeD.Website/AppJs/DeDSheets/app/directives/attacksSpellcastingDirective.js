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