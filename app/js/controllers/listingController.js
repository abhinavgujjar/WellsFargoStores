
angular.module('myApp.controllers')
	.controller('listingController', ['$scope', 'hotelsProvider', '$location','fbLogin',
		function($scope, hotelsProvider, $location, fbLogin) {

			console.log(fbLogin);

			hotelsProvider.getHotels().success(function(data){
				$scope.hotels = data;
			});

			
			$scope.selectHotel = function(hotel){
				hotelsProvider.selectedHotel = hotel;

				$location.url('/details');
			}

		}
	])
