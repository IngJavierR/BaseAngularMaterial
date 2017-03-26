(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name demoApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the demoApp
   */
  angular.module('demoApp')
    .controller('AboutCtrl', AboutCtrl);

  AboutCtrl.$inject = ['$scope', 'jokes'];

  function AboutCtrl($scope, jokes) {
    var vm = this;
    vm.tellJoke = tellJoke;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    function tellJoke(){
      return jokes.getJoke()
      .then(function(data) {
        vm.joke = data;
      });
    }
  }

})();
