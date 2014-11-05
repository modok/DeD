angular.module('DeDSheets.directives')
.directive('equipment', [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			objects:'='
		},
		templateUrl: '/AppJs/DeDSheets/app/views/directives/equipmentDirective.html',
		link: function (scope) { }

	}
}]);