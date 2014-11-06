angular.module('DeDSheets.directives')
.directive('statisticsAndProfix', ['statsService'
	, function (statsService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			stats: '=',
			profix: '='
		},
		templateUrl: '/AppJs/DeDSheets/app/views/directives/statisticsAndProfixDirective.html',
		link: function(scope) {
			scope.bonusByValue = function(value) {
				return statsService.bonusByValue(value);
			};
			scope.bonusByStat = function(code, stats) {
				return statsService.bonusByStat(code, stats);
			};
		}

	};
}]);