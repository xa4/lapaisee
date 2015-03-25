'use strict';

angular.module('lapaiseeApp')
  .controller('MainCtrl', function ($scope, $http, socket, $location) {
    $scope.beers = [];

    $http.get('/api/beers').success(function(beers) {
      $scope.beers = beers;
      socket.syncUpdates('beer', $scope.beers);
    });

    $scope.addBeer = function() {
      if($scope.newBeer === '') {
        return;
      }
      $http.post('/api/beers', { name: $scope.newBeer });
      $scope.newBeer = '';
    };

    $scope.deleteBeer = function(beer) {
      $http.delete('/api/beers/' + beer._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('beer');
    });

    $scope.lookupBeer = function(beer) {
      $location.path('/lot/' + beer.batch, false);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('beer');
    });
  });
