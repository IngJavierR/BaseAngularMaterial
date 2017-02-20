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

function MainCtrl(){
  var vm = this;
  vm.awesomeThings =[
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
}

})();
