(function() {
  'use strict';

  var listResource = angular.module('app.lists');

  listResource.factory('ListsResource', ListsResource);
  ListsResource.$inject = ['$resource'];

  function ListsResource($resource) {
    var baseUrl = 'https://jsonplaceholder.typicode.com';

    return $resource('', {}, {
      getPosts: {
        method: 'GET',
        url: baseUrl + '/posts',
        isArray: true
      }
    });
  }

})();