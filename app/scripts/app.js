'use strict';

/**
 * @ngdoc overview
 * @name dcunited08githubioApp
 * @description
 * # dcunited08githubioApp
 *
 * Main module of the application.
 */
angular
  .module('dcunited08githubioApp', [
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
