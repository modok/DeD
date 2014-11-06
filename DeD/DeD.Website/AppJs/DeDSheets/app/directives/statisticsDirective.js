angular.module('DeDSheets.directives')
.directive('statistics', ['statsService'
	, function (statsService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			stats: '=',
		},
		templateUrl: '/AppJs/DeDSheets/app/views/directives/statisticsDirective.html',
		link: function(scope) {
			scope.bonusByValue = function(value) {
				return statsService.bonusByValue(value);
			};
		}

	};
}]);