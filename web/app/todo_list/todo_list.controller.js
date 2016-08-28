(function () {
'use strict';

  var ctrl =  angular.module('app.todo_list');
  ctrl.controller('TodoListController', TodoListController);

  TodoListController.$inject = ['$rootScope', '$scope', 'TodoListModel'];
  function TodoListController($rootScope, $scope, TodoListModel) {
    // Scope property assignment
    $scope.model      = TodoListModel;
    $scope.limitRange = [
      {value: 5, label: "First 5"},
      {value: 10, label: "First 10"},
      {value: 15, label: "First 15"},
      {value: 20, label: "First 20"},
      {value: 50, label: "First 50"},
      {value: null, label: "All"},
    ];
    $scope.limit      = 5;
    $scope.entityList = [];
    // Scope method assignment
    $scope.fetchAll = fetchAll;

    function fetchAll() {
      $scope.model.fetchAll()
      .then(
        function (response) {
          $scope.entityList = response;
        },
        function (error) {
          console.log('fetchAll error!');
          console.log(error);
        }
      );
    };

    fetchAll();
  };
})();

