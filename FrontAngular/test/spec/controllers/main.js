'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
    MainCtrl.prueba();
    expect(MainCtrl.data).toBe('AngularJS');
  });
  it('should attach prueba result', function () {
    expect(MainCtrl.prueba()).toBe('HTML5 Boilerplate');
  });
  it('should attach data', function () {
    expect(MainCtrl.prueba()).toBe('HTML5 Boilerplate');
    expect(MainCtrl.data).toBe('AngularJS');
  });
});
