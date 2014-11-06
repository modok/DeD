angular.module('DeDSheets.directives')
.directive('profix', ['statsService'
	, function (statsService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			stats: '=',
			profix: '='
		},
		templateUrl: '/AppJs/DeDSheets/app/views/directives/profixDirective.html',
		link: function(scope) {
			scope.bonusByStat = function(code, stats) {
				return statsService.bonusByStat(code, stats);
			};
		}

	};
}]);