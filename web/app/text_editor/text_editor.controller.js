(function () {
'use strict';

  var ctrl =  angular.module('app.text_editor');
  ctrl.controller('TextEditorController', TextEditorController);

  TextEditorController.$inject = ['$rootScope', '$scope'];
  function TextEditorController($rootScope, $scope) {

    $scope.editorContent = '';

  };
})();

