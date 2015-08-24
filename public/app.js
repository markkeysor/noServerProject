var app = angular.module('maggsLashes', ['ngRoute', 'ui.calendar']);

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

		.when('/dashboard', {
			templateUrl: 'app/templates/dashboardTmpl.html',
			// controller: 'dashboardCtrl'
		})

		.when('/calendar', {
			templateUrl: 'app/templates/calendarTmpl.html',
			controller: 'calendarCtrl'
		})

		.otherwise ({
			redirectTo: '/'
		});
});
