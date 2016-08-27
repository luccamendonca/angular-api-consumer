'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'ngResource',
  'app.home',
  'app.lists',
  'app.form.simple',
  'app.user'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});

  $routeProvider
  .when('/home', {
    templateUrl: 'templates/home/home.html',
    controller: 'HomeController'
  })
  .when('/form-simple', {
    templateUrl: 'templates/form/simple.html',
    controller: 'SimpleFormController'
  })
  .when('/list-simple', {
    templateUrl: 'templates/lists/simple.html',
    controller: 'SimpleListController'
  });

}]);


