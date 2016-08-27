(function () {
  'use strict';

  angular
    .module('app.lists')
    .directive('simpleList', simpleList);

  simpleList.$inject = [];
  function simpleList() {
    return {
      link: link,
      restrict: 'E',
      transclude: true,
      templateUrl: 'templates/lists/simple.directive.html',
      scope: {
        fieldMap: '=',
        entityList: '=',
        showActions: '=',
        editCallback: '&editCallback'
      }
    };

    function link(scope, element, attrs) {
      scope.listFilter = {};
    };
  }

})();

