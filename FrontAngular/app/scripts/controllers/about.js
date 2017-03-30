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
    vm.tellJokes = tellJokes;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    function tellJoke(){
      jokes.getJoke()
      .then(function(data) {
        vm.joke = data;
      });
    }

    function tellJokes(){
      jokes.getJokes()
      .get({number:vm.numJokes})
      .$promise
      .then(function(data){
          vm.jokes = data.value;
      });
    }
  }

})();
