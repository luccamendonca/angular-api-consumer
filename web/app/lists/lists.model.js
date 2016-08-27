(function() {
  'use strict';

  var listModel = angular.module('app.lists');

  listModel.factory('ListsModel', ListsModel);
  ListsModel.$inject = ['$filter', '$rootScope', '$q', 'ListsResource'];

  function ListsModel($filter, $rootScope, $q, ListsResource) {
    var self     = this;
    var resource = ListsResource;

    self.fetchAllPosts = function (userId) {
      var deferred = $q.defer();
      var params = {};
      if (undefined !== userId) {
        params.userId = userId;
      }

      resource.getPosts(params).$promise
      .then(
        function(postList) {
          angular.forEach(postList, function (post, key) {
            post.title = $filter('limitTo')(post.title, 50)+'...';
            post.body = $filter('limitTo')(post.body, 80)+'...';
          });

          deferred.resolve(postList);
        },
        function(error) { deferred.reject(error); }
      );

      return deferred.promise;
    };

    self.getPostStructure = function (argument) {
      return [
        {name: 'id', label: 'ID'},
        {name: 'userId', label: 'User ID'},
        {name: 'title', label: 'Title'},
        {name: 'body', label: 'Content'}
      ];
    };


    return self;
  }

})();