(function() {
  'use strict';

  var userModel = angular.module('app.todo_list');

  userModel.factory('TodoListModel', TodoListModel);
  TodoListModel.$inject = ['TodoListResource'];

  function TodoListModel(TodoListResource) {
    var self     = this;
    var resource = TodoListResource;

    self.getFormStructure = function () {
      return {
        id: 0,
        userId: 0,
        title: '',
        completed: false,
      }
    };

    self.fetchAll = function (limit) {
      return resource.fetchAll().$promise
    };

    return self;
  }

})();