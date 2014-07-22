angular.module('myApp.services')
	.factory('hotelsProvider', [

		function() {

			var hotels = [{
				name: 'Novotel',
				image: 'eakmUwL.jpg',
				location: 'Madhapur',
				rating: 3,
				description: 'Lorem ipsum habitasse non lobortis nostra turpis maecenas, vitae lorem viverra conubia vitae leo, quisque nulla pharetra congue senectus pellentesque elementum posuere nostra himenaeos non vivamus leo nibh rhoncus mollis.'
			}, {
				name: 'Katriya Hotel',
				image: 'eakmUwL.jpg',
				location: 'Madhapur',
				rating: 3,
				description: 'Lorem ipsum habitasse non lobortis nostra turpis maecenas, vitae lorem viverra conubia vitae leo, quisque nulla pharetra congue senectus pellentesque elementum posuere nostra himenaeos non vivamus leo nibh rhoncus mollis.'
			}, {
				name: 'Radisson ',
				image: 'cVBnPDl.jpg',
				location: 'Hitec City',
				rating: 3,
				description: 'Semper quis donec inceptos himenaeos sem convallis scelerisque fames pretium posuere, non praesent ut pellentesque varius feugiat luctus velit sem neque auctor id rutrum tortor pretium lacinia platea scelerisque leo commodo justo diam etiam.'
			}, {
				name: 'Park Hyatt',
				image: 'wHgAXz9.jpg',
				location: 'Banjara Hills',
				rating: 3,
				description: 'Tincidunt a curae ipsum nunc aliquet sapien aenean quisque et, non turpis conubia tempor curabitur eget malesuada consequat inceptos, libero metus elit molestie tellus venenatis amet himenaeos ut donec phasellus quisque rutrum vivamus curabitur cursus.'
			}, {
				name: 'Westin',
				image: 'y19ueIO.jpg',
				location: 'Gachibowli',
				rating: 3,
				description: 'Congue elementum dictumst mattis odio curae pretium viverra fames, sed eros orci sollicitudin fermentum convallis fringilla risus, rhoncus tincidunt commodo nisl fusce ad interdum amet proin facilisis vel quisque integer laoreet blandit tristique fames.'
			}];

			function internalAddHotel(hotel){
				hotels.push(hotel);
			}

			return {
				getHotels: function() {
					return hotels;
				},
				addHotel : internalAddHotel
			}


		}
	]);