(function() {
  'use strict';

  var userResource = angular.module('app.user');

  userResource.factory('UserResource', UserResource);
  UserResource.$inject = ['$resource'];

  function UserResource($resource) {
    var baseUrl = 'https://jsonplaceholder.typicode.com/users';

    return $resource(baseUrl + '/:id', {}, {
      fetchAll: {
        method: 'GET',
        url: baseUrl,
        isArray: true
      }
    });
  }

})();