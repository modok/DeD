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