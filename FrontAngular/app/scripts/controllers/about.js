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

AboutCtrl.$inject = ['$scope'];

function AboutCtrl(){
  var vm = this;
  vm.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
}

})();
