'use strict';

angular.module('lapaiseeApp')
  .controller('BeerDetailCtrl', function ($scope, $stateParams, Auth, $http) {
    $scope.beer = {};
    $scope.invitationMessage = "";
    $scope.invitedEMail = "";
    $scope.invitedAdmin = true;
    $scope.users = {};

    $http.get('/api/beers/' + $stateParams.beerId)
    .success(function(data, status, headers, config) {
      $scope.beer = data;
    });

    $scope.updateBeer = function() {
      console.log($scope.beer);
      $http.put('/api/beers/' + $stateParams.beerId, $scope.beer).
      success(function() {
        $scope.showSuccess()
      });
    };

    $scope.showSuccess = function() {
      console.log('yes!');
    };

    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

     $scope.open = function($event,opened) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope[opened] = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.format = 'dd.MM.yyyy';


  });
