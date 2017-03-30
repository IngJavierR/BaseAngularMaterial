(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name demoApp.controller:TutorialCtrl
   * @description
   * # TutorialCtrl
   * Controller of the demoApp
   */

  angular.module('demoApp')
    .controller('TutorialCtrl', TutorialCtrl);

  TutorialCtrl.$inject = ['$scope'];

  function TutorialCtrl() {
    var vm = this;
    vm.textoPrueba = '';
    vm.dale = dale;
    vm.getCoche = getCoche;
    vm.coches = ['Nissan','BMW','Audi','Meche'];


    function dale(saludo){
      vm.textoPrueba = saludo + ' Javier';
    }

    function getCoche(coche){
      vm.textoPrueba = 'mi' + coche;
    }

  }

})();
