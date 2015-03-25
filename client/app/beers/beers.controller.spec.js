'use strict';

describe('Controller: BeersCtrl', function () {

  // load the controller's module
  beforeEach(module('lapaiseeApp'));

  var BeersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BeersCtrl = $controller('BeersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
