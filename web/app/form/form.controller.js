(function () {
'use strict';

  var postListController =  angular.module('app.form.simple');
  postListController.controller('SimpleFormController', SimpleFormController);

  SimpleFormController.$inject = ['$rootScope', '$scope', 'UserModel', 'ValidationService'];
  function SimpleFormController($rootScope, $scope, UserModel, ValidationService) {

  	var validator = new ValidationService({
  		debounce: 1500,
  		scope: $scope,
  		isolatedScope: $scope,
  		preValidateFormElements: false,
  		displayOnlyLastErrorMsg: false
  	});

    $scope.showSummary = false;
    $scope.form        = UserModel.getFormStructure();

  };
})();

