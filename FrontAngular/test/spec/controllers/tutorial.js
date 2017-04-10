'use strict';

describe('Controller: TutorialCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var TutorialCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TutorialCtrl = $controller('TutorialCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('expect sum of two numbers', function(){
    var vm = TutorialCtrl;
    vm.varA = 5;
    vm.varB = 5;
    vm.sumaNum();
    expect(vm.sumaResult).toBe(10);
  });

  it('expect salute', function(){
    var vm = TutorialCtrl;
    vm.dale('hola');
    expect(vm.textoPrueba).toBe('hola Javier');
  });

  it('expect coche', function(){
    var vm = TutorialCtrl;
    vm.getCoche('bmw');
    expect(vm.textoPrueba).toBe('mibmw');
  });

  it('expect Chuck Joke', function(){
    var vm = TutorialCtrl;
    vm.getChuckJoke();
    expect(vm.joke.$resolved).toBeFalsy();
  });
});
