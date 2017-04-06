(function(){
  'use strict';

  angular.module('demoApp')
    .directive('detenidoControl', detenidoControl);

    //detenidoControl.$inject = ['$scope'];

    function detenidoControl(){
      return {
        restrict: 'E',
        templateUrl: '<h1>Hola</h1>'
      };
    }

})();
