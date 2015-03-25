'use strict';

angular.module('lapaiseeApp')
  .controller('BeerInfoCtrl', function ($scope, $stateParams, Auth, $http, $modal, $location) {
    $scope.beer = {};
    $scope.invitationMessage = "";
    $scope.invitedEMail = "";
    $scope.invitedAdmin = true;
    $scope.users = {};

    $http.get('/api/beers/lot/' + $stateParams.batch)
    .success(function(data, status, headers, config) {
      console.log(data);
      $scope.beer = data;
    })
    .error(function(data, status, headers, config) {
      if (status = 404) {
        $location.path('/');
      }
    });

    $scope.convertToPlato = function(sg) {
      if (typeof sg === 'undefined') return '';
      sg = sg/1000;
      var plato = '(' + Math.round((-616.868 + 1111.14*sg -630.272*Math.pow(sg, 2) + 135.997*Math.pow(sg, 3)) * 100) / 100 + '\u00B0P)';
      return plato;
    }

    $scope.open = function (content) {
      var modalInstance = $modal.open({
        templateUrl: content,
        controller: 'ModalInstanceCtrl'
      });
    };
  });

angular.module('lapaiseeApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});