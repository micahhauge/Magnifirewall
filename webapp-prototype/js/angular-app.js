angular.module('app', ['ngRoute'])

  .controller('EventController', ['$scope', function ($scope) {
    $scope.events= [
        { type: 'Failed SSH', severity: 9, description: "Someone failed to enter correct ssh credentials.", ip: '104.23.2584'},
        { type: 'Torrenting ', severity: 8, description: "BitTorrent Client Detected", ip: '124.23.2584'},
        { type: 'DDOS attack', severity: 10, description: "Someone is attempting a DDOS attack!", ip: '666.23.2584'},
    ];
  }])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/events.html',
        controller: 'EventController'
      });
  }]);
