(function () {
'use strict';

  var userListController =  angular.module('app.lists');
  userListController.controller('UserListController', UserListController);

  UserListController.$inject = ['$rootScope', '$scope', '$state', '$stateParams', 'UserModel'];
  function UserListController($rootScope, $scope, $state, $stateParams, UserModel) {
    $scope.model = UserModel;

    // Scope properties
    $scope.editMode      = false;
    $scope.tableFilter   = {};
    $scope.entityList    = [];
    $scope.form          = $scope.model.getFormStructure()
    $scope.fieldMap      = $scope.model.getListFields();

    // Scope method assignment
    $scope.fetchAll       = fetchAll;
    $scope.fetchById      = fetchById;
    $scope.cancelUserEdit = cancelUserEdit;

    function fetchAll() {
      $scope.model.fetchAll()
      .then(
        function (userList) {
          $scope.entityList = userList;
        },
        function (error) {
          console.log('fetchAll error!');
          console.log(error);
        }
      );
    };

    function fetchById(userId) {
      if ($stateParams.id != userId) {
        $state.go('userForm', {id: userId});
        return;
      }

      $scope.model.fetchById(userId)
      .then(
        function (userInfo) {
          $scope.form     = userInfo;
          $scope.editMode = true;
          $stateParams.id = userId;
        },
        function (error) {
          console.log('fetchById error!');
          console.log(error);
        }
      );
    }

    function cancelUserEdit() {
      $state.go('userForm', {id: null});
      return;
    }

    if (0 < $stateParams.id) {
      fetchById($stateParams.id);
    }

    fetchAll();

  };
})();

