(function() {
  'use strict';

  var resource = angular.module('app.todo_list');

  resource.factory('TodoListResource', TodoListResource);
  TodoListResource.$inject = ['$resource'];

  function TodoListResource($resource) {
    var baseUrl = 'https://jsonplaceholder.typicode.com/todos';

    return $resource('', {}, {
      fetchAll: {
        method: 'GET',
        url: baseUrl,
        isArray: true
      }
    });
  }

})();