var app = angular.module('maggsLashes', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/templates/indexTmpl.html',
			controller: 'mainCtrl'
		})

		.when('/about', {
			templateUrl: 'app/templates/aboutTmpl.html',
			controller: 'aboutCtrl'
		})

		.when('/sign-in-up', {
			templateUrl: 'app/templates/registerTmpl.html',
			controller: 'usersCtrl'
		})

		.otherwise ({
			redirectTo: '/'
		})
});
