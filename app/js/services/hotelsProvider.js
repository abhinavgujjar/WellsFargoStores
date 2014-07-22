angular.module('myApp.services')
	.factory('hotelsProvider', ['$http',

		function($http) {


			function internalAddHotel(hotel) {
				hotels.push(hotel);
			}

			var selectedHotel;

			function getHotel(id) {
				var targeHotel;

				angular.forEach(hotels, function(item) {
					if (item.id === id) {
						targeHotel = item;
					}
				});

				return targeHotel;
			}

			return {
				getHotels: function() {
					return $http.get('data/hotels.json', {
						headers: [{
							"userName": "abhinav"
						}],
						transformResponse: function(data) {
							var raw = angular.fromJson(data);
							return raw.result;
						}
					});
				},
				addHotel: internalAddHotel,
				selectedHotel: selectedHotel,
				findHotel: getHotel
			}


		}
	]);