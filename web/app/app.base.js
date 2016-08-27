'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'ngResource',
  'app.home',
  'app.lists',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});

  $routeProvider
  .when('/home', {
    templateUrl: 'templates/home/home.html',
    controller: 'HomeController'
  })
  .when('/posts', {
    templateUrl: 'templates/lists/posts.html',
    controller: 'PostListController'
  });

}]);


