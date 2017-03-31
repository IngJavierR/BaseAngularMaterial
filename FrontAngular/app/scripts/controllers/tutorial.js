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

  TutorialCtrl.$inject = ['$scope','Jokes'];

  function TutorialCtrl($scope, Jokes) {
    var vm = this;
    vm.textoPrueba = '';
    vm.joke = '';
    vm.dale = dale;
    vm.getCoche = getCoche;
    vm.getChuckJoke = getChuckJoke;
    vm.coches = ['Nissan','BMW','Audi','Meche'];


    function dale(saludo){
      vm.textoPrueba = saludo + ' Javier';
    }

    function getCoche(coche){
      vm.textoPrueba = 'mi' + coche;
    }

    function getChuckJoke(){
      Jokes.getJoke().then(function(result){
        vm.joke = result;
      });
    }

  }

})();
