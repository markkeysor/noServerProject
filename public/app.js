var app = angular.module('maggsLashes', ['ngRoute', 'ui.calendar', 'firebase']);


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

	  .when('/dashboard/:id', {
	      templateUrl: 'app/templates/dashboardTmpl.html',
	      controller: 'dashboardCtrl',
				resolve: {
					userBoiId: function($route){
						return $route.current.params.id;
					},
				}

			})
			.when('/dashboard', {
					templateUrl: 'app/templates/signedInTmpl.html',
					controller: 'signedInCtrl'
			})


	.when('/calendar', {
	  templateUrl: 'app/templates/calendarTmpl.html',
	  controller: 'calendarCtrl',
	  resolve: {
	    getappts: function(appointmentService) {
	      return appointmentService.retrieveAppt();
	    }
	  }
	})


	.otherwise({
	  redirectTo: '/'
	});
});
