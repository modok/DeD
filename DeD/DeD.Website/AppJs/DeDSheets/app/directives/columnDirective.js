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