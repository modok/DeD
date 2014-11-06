angular.module('DeDSheets.directives')
.directive('attacksSpellcasting', ['equipmentService'
	, function (equipmentService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			equipment: '=',
			spells: '='
		},
		templateUrl: '/AppJs/DeDSheets/app/views/directives/attacksSpellcastingDirective.html',
		link: function(scope) {
			scope.getWeaponInfoByName = function(name) {
				return equipmentService.getWeaponInfoByName(name);
			}
		}
	}
}]);