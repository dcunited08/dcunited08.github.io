'use strict';

/**
 * @ngdoc function
 * @name dcunited08githubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dcunited08githubioApp
 */
angular.module('dcunited08githubioApp')
	.controller('MainCtrl', function($scope, $mdSidenav) {
		$scope.toggleSidenav = function(menuId) {
			$mdSidenav(menuId).toggle();
		};

	});