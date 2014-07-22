'use strict';

/* Filters */

angular.module('myApp.filters', []).
filter('interpolate', ['version',
	function(version) {
		return function(text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		};
	}
])
.filter('wordlimit', ['wordlimitConfig',

	function(wordlimitConfig) {

		return function(input) {
			return input.split(' ').slice(0, wordlimitConfig).join(' ');
		};

	}
]);