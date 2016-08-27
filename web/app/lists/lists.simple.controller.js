(function () {
'use strict';

  var postListController =  angular.module('app.lists');
  postListController.controller('SimpleListController', SimpleListController);

  SimpleListController.$inject = ['$rootScope', '$scope', 'ListsModel'];
  function SimpleListController($rootScope, $scope, ListsModel) {
    $scope.model = ListsModel;

    // Scope properties
    $scope.tableFilter   = {};
    $scope.allPosts      = [];
    $scope.postStructure = $scope.model.getPostStructure();

    // Scope method assignment
    $scope.fetchPosts = fetchPosts;
    $scope.clearList  = clearList;

    function fetchPosts(userId) {
      $scope.model.fetchAllPosts(userId)
      .then(
        function (response) {
          $scope.allPosts = response;
        },
        function (error) {
          console.log('fetchAllPosts error!');
          console.log(error);
        }
      );
    };

    function clearList() {
      $scope.allPosts    = [];
      $scope.tableFilter = {};
    };

  };
})();

