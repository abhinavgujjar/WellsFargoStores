angular.module('hotelAdvisor', []);


angular.module('hotelAdvisor').
controller('hotelsController', ['$scope', '$filter',
	function($scope, $filter) {

		$scope.upvote = function(hotel) {
			hotel.rating++;

		}

		$scope.downvote = function(hotel) {
			hotel.rating--;

		}
		
		var up =  $filter('uppercase');
		$scope.message = up('This is the message');




		$scope.blueClass = 'blue';


		$scope.hotels = [{
			name: 'Taj Banjara',
			price: 1000,
			location: 'Banjara Hills',
			image: 'icon1.png',
			rating: 5,
			description: 'Modules Binding and Template '
		}, {
			name: 'Novotel',
			price: 3000,
			location: 'Madhapura',
			image: 'icon2.png',
			rating: 7,
			description: 'Modules Binding and Template Directives Element and Event	Directives Special Attributes Repeating	elements in	templates Responding to	model changes Using	Expressions,	CSS	classes	and	styles Using	Controllers	for	UI	responsibility	separation Templates	and	Data	Binding '

		}, {
			name: 'Westin',
			price: 4000,
			location: 'Madhapura',
			image: 'icon3.png',
			rating: 10,
			description: 'Modules Binding and Template Directives Element and Event	Directives Special Attributes Repeating	elements in	templates Responding to	model changes Using	Expressions,	CSS	classes	and	styles Using	Controllers	for	UI	responsibility	separation Templates	and	Data	Binding '

		}]
	}
]);

angular.module('hotelAdvisor').
filter('wordlimit', [
	function() {

		return function(input, count) {
			return input.split(' ').slice(0, count).join(' ');
		}

	}
]);