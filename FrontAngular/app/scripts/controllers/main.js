(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name demoApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the demoApp
   */
  angular.module('demoApp').
  controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope'];

  function MainCtrl() {
    var vm = this;
    vm.prueba = Prueba;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    activate();

    function activate(){

    }

    function Prueba(){
      vm.data = vm.awesomeThings[1];
      return vm.awesomeThings[0];
    }
  }

})();
