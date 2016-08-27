(function() {
  'use strict';

  var userModel = angular.module('app.user');

  userModel.factory('UserModel', UserModel);
  UserModel.$inject = ['$rootScope', 'UserResource'];

  function UserModel($rootScope, UserResource) {
    var self     = this;
    var resource = UserResource;

    self.getFormStructure = function () {
      return {
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: '',
          }
        },
        company: {
          name: '',
          catchPhrase: '',
          bs: ''
        }
      }
    };

    self.getListFields = function () {
      return [
        {name: 'id', label: 'ID'},
        {name: 'name', label: 'Name'},
        {name: 'username', label: 'Username'},
        {name: 'email', label: 'E-mail'},
        {name: 'phone', label: 'Phone number'},
        {name: 'website', label: 'Website'},
      ];
    };

    self.fetchAll = function () {
      return resource.fetchAll().$promise;
    };

    self.fetchById = function (userId) {
      return resource.get({id: userId}).$promise;
    };

    return self;
  }

})();