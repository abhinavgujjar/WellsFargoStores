'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'ngRoute',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers'
]).
config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/listing', {
			templateUrl: 'partials/listing.html',
			controller: "listingController"
		});
		$routeProvider.when('/details', {
			templateUrl: 'partials/details.html',
			controller: "detailsController"
		});
		$routeProvider.when('/new', {
			templateUrl: 'partials/new.html',
			controller: "newController"
		});
		$routeProvider.otherwise({
			redirectTo: '/listing'
		});
	}
]);