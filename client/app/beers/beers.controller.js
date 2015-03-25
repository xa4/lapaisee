'use strict';

angular.module('lapaiseeApp')
  .controller('BeersCtrl', function ($scope, $http, socket) {
    $scope.beers = [];

    $http.get('/api/beers').success(function(beers) {
      $scope.beers = beers;
      socket.syncUpdates('beer', $scope.beers);
    });

    $scope.addBeer = function() {
      if($scope.newBeer.batch === '') {
        return;
      }
      $http.post('/api/beers', { batch: $scope.newBeer.batch });
      $scope.newBeer.batch = '';
    };

    $scope.deleteBeer = function(beer) {
      $http.delete('/api/beers/' + beer._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('beer');
    });
  });
