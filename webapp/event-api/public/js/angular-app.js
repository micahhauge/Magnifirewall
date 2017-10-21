angular.module('app', ['ngRoute'])

  .controller('EventController', ['$scope', function ($scope) {
    $scope.events= [
        { type: 'Failed SSH', severity: 5, description: "Someone failed to enter correct ssh credentials.", ip: '104.23.2584'},
        { type: 'Torrenting ', severity: 8, description: "BitTorrent Client Detected", ip: '124.23.2584'},
        { type: 'DDOS attack', severity: 10, description: "Someone is attempting a DDOS attack!", ip: '666.23.2584'},
    ];

    $scope.connections= [
        { ip: "1.42.152.35", device: 'MacbookPro', timeOnNetwork: '01:23:13'},
        { ip: "8.41.102.35", device: 'Dell latitude', timeOnNetwork: '00:03:13'},
        { ip: "7.21.12.359", device: 'IOS Device', timeOnNetwork: '00:20:02'},
        { ip: "1.42.152.35", device: 'Thinkpad', timeOnNetwork: '01:23:13'},
        { ip: "7.21.12.359", device: 'Android Device', timeOnNetwork: '00:20:02'},
        { ip: "1.42.152.35", device: 'MacbookPro', timeOnNetwork: '01:23:13'},
        { ip: "8.41.102.35", device: 'Dell latitude', timeOnNetwork: '00:03:13'},
        { ip: "7.21.12.359", device: 'IOS Device', timeOnNetwork: '00:20:02'},
        { ip: "1.42.152.35", device: 'Thinkpad', timeOnNetwork: '01:23:13'},
        { ip: "8.41.102.35", device: 'Dell latitude', timeOnNetwork: '00:03:13'},
        { ip: "7.21.12.359", device: 'IOS Device', timeOnNetwork: '00:20:02'},
        { ip: "1.42.152.35", device: 'Thinkpad', timeOnNetwork: '01:23:13'},
    ];
    
    $scope.timewasters = [
      { site: 'Facebook', ip: "3.23.142", time: "12:34pm"}, 
      { site: 'Reddit', ip: "3.23.142", time: "2:10"}, 
      { site: 'Instagram', ip: "3.23.142", time: "1:34pm"}, 
      { site: 'Youtube', ip: "3.23.142", time: "3:24pm"}, 
    ];
    
  }])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/events.html',
        controller: 'EventController'
      });
  }]);
