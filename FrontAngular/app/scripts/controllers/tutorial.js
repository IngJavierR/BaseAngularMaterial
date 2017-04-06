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
    vm.numJokes = 0;
    vm.textoPrueba = '';
    vm.joke = '';
    vm.dale = dale;
    vm.varA = 0;
    vm.varB = 0;
    vm.sumaResult = 0;
    vm.chuckJokes = [];
    vm.getCoche = getCoche;
    vm.getChuckJoke = getChuckJoke;
    vm.getChuckJokes = getChuckJokes;
    vm.sumaNum = sumaNum;
    vm.coches = ['Nissan','BMW','Audi','Meche'];
    vm.detenido = {
      nombre: 'el chaca'
    };

    function sumaNum(){
      vm.sumaResult = Jokes.suma(vm.varA, vm.varB);
    }

    function dale(saludo){
      vm.textoPrueba = saludo + ' Javier';
    }

    function getCoche(coche){
      vm.textoPrueba = 'mi' + coche;
    }

    function getChuckJoke(){
      Jokes.getJokes()
        .get()
        .$promise
        .then(function(data){
          vm.joke = data.value.joke;
        });
    }

    function getChuckJokes(){
      Jokes.getJokes()
        .get({number: vm.numJokes, name: 'intel'})
        .$promise
        .then(function(data){
          vm.chuckJokes = data.value;
        });
    }

  }

})();
