
angular.module('myApp.controllers')
	.controller('listingController', ['$scope', 'hotelsProvider',
		function($scope, hotelsProvider) {

			$scope.hotels = hotelsProvider.getHotels();

		}
	])
