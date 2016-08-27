'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
  'ngRoute',
  'ngResource',
  'ui.router',
  'app.home',
  'app.lists',
  'app.form.simple',
  'app.user'
]);

app.config(routesConfig);
routesConfig.$inject = ['$routeProvider', '$stateProvider'];

function routesConfig($routeProvider, $stateProvider) {
  $routeProvider.otherwise('/home');

  $stateProvider
  .state(
    'home', {
      url: '/home',
      title: 'Home',
      controller: 'HomeController',
      templateUrl: 'templates/home/home.html'
    }
  )
  .state(
    'simpleForm', {
      url: '/form-simple',
      title: 'Simple User Form',
      controller: 'SimpleFormController',
      templateUrl: 'templates/form/simple.html'
    }
  )
  .state(
    'simpleList', {
      url: '/list-simple',
      title: 'Simple List',
      controller: 'SimpleListController',
      templateUrl: 'templates/lists/simple.html'
    }
  )
  .state(
    'userForm', {
      url: '/user/:id',
      title: 'User List & Form',
      controller: 'UserListController',
      templateUrl: 'templates/lists/user_form_and_list.html'
    }
  );
}


app.run(appRun);
appRun.$inject = ['$rootScope', '$state', '$stateParams'];

function appRun($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.currentYear = (new Date()).getFullYear();
}