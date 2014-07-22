angular.module('myApp.controllers')
	.controller('newController', ['$scope', 'hotelsProvider', '$location',
		function($scope, hotelsProvider, $location) {
			$scope.saveHotel = function(hotel, hotelForm) {

				if (hotelForm.$invalid) {
					alert('not valid');
				} else {

					console.log('name ' + hotel.name);
					console.log('location ' + hotel.location);
					console.log('price ' + hotel.price);

					hotelsProvider.addHotel(hotel);

					$location.url('/listing');
				}
			}
		}
	]);