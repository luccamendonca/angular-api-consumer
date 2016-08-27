(function () {
'use strict';

  var postListController =  angular.module('app.form.simple');
  postListController.controller('SimpleFormController', SimpleFormController);

  SimpleFormController.$inject = ['$rootScope', '$scope', 'UserModel'];
  function SimpleFormController($rootScope, $scope, UserModel) {

    $scope.showSummary = false;
    $scope.form        = UserModel.getFormStructure();

  };
})();

