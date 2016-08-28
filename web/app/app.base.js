'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
  'ngRoute',
  'ngResource',
  'ui.router',
  'app.home',
  'app.lists',
  'app.form.simple',
  'app.user',
  'app.todo_list',
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
  )
  .state(
    'todoList', {
      url: '/todo',
      title: 'To-do List',
      controller: 'TodoListController',
      templateUrl: 'templates/todo_list/simple.html'
    }
  );
}

app.run(appRun);
appRun.$inject = ['$rootScope', '$state', '$stateParams', 'Sidebar'];

function appRun($rootScope, $state, $stateParams, Sidebar) {
  $rootScope.$state = $state;
  $rootScope.currentYear = (new Date()).getFullYear();
  $rootScope.sidebarStructure = Sidebar.getStructure();
}

app.factory('Sidebar', Sidebar);
Sidebar.$inject = [];

function Sidebar() {
  var self = this;

  self.getStructure = function () {
    return [
      {state: 'home', title: 'Home'},
      {state: 'simpleForm', title: 'Simple Form'},
      {state: 'simpleList', title: 'Simple List'},
      {state: 'userForm', title: 'User "CRUD"'},
      {state: 'todoList', title: 'Simple To-do List'},
      {state: 'textEditor', title: 'WYSIWYG Editor'}
    ];
  };

  return self;
}