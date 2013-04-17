'use strict';

/* Controllers */

myApp.controller('AppCtrl', ['$scope', 'socket', function($scope, socket) {
	socket.on('send:name', function(data) {
		$scope.name = data.name;
	});
}]);

myApp.controller('MyCtrl1', ['$scope', 'socket', function($scope, socket) {
	socket.on('send:time', function(data) {
		$scope.time = data.time;
	});
}]);

myApp.controller('MyCtrl2', ['$scope', 'socket', function($scope, socket) {

}]);
