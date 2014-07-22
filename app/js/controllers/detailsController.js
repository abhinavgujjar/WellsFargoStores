
angular.module('myApp.controllers')
	.controller('detailsController', ['$scope', 'hotelsProvider', '$routeParams',
		function($scope, hotelsProvider, $routeParams) {

			console.log($routeParams.id);

			$scope.hotel = hotelsProvider.findHotel($routeParams.id);

		}
	])
