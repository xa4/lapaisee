'use strict';

angular.module('lapaiseeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('beers', {
        url: '/beers',
        templateUrl: 'app/beers/beers.html',
        controller: 'BeersCtrl',
        authenticate: true
      })
      .state('beer-detail', {
        url: '/beers/:beerId',
        templateUrl: 'app/beers/beer-detail.html',
        controller: 'BeerDetailCtrl',
        authenticate: true
      })
      .state('beer-info', {
        url: '/lot/:batch',
        templateUrl: 'app/beers/beer-info.html',
        controller: 'BeerInfoCtrl'
      });
  });