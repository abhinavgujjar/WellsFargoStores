
angular.module('myApp.controllers')
	.controller('detailsController', ['$scope', 'hotelsProvider',
		function($scope, hotelsProvider) {

			$scope.hotels = hotelsProvider.getHotels();

		}
	])
