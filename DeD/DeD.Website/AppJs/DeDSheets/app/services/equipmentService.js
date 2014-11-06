angular.module('DeDSheets.services')
	.factory('equipmentService', [function () {
		return new function equipmentService() {

			var weapons = {
				"rapier": {
					atkBonus: 3,
					damage: "1d8",
					damageBonus: 3,
					range: 'melee'
				},
				"short bow": {
					atkBonus: 3,
					damage: "1d6",
					damageBonus: 3,
					range: 'range 80/320'
				},
				"dagger": {
					atkBonus: 3,
					damage: "1d4",
					damageBonus: 3,
					range: 'range 20/60'
				}
			};

			this.getWeaponInfoByName = function(name) {
				return weapons[name.toLowerCase()];
			}
		};
	}]);