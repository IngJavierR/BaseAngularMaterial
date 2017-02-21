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
  controller('InitialCtrl', InitialCtrl);

  InitialCtrl.$inject = ['$scope', '$mdMedia', '$mdSidenav'];

  function InitialCtrl($scope, $mdMedia, $mdSidenav) {
    var vm = this;

    /**
     * Front Event Interface
     */
    vm.toggleState = ToggleState;


    /**
     * Functions
     */
    function ToggleState(name) {
      $mdSidenav('left').toggle();
    }

  }

})();
