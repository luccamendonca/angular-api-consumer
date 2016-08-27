(function () {
'use strict';

  var homeController =  angular.module('app.home');
  homeController.controller('HomeController', HomeController);

  HomeController.$inject = ['$rootScope', '$scope'];
  function HomeController($rootScope, $scope) {

  };
})();

