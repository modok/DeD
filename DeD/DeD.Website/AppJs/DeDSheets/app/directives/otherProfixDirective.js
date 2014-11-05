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