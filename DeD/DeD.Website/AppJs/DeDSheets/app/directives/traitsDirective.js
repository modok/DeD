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