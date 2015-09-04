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
					return $route.current.params.id
				}
			}
      // resolve: {
      //   // controller will not be loaded until $requireAuth resolves
      //   // Auth refers to our $firebaseAuth wrapper in the example above
      //   "currentAuth": ["Auth", function(Auth) {
      //     // $requireAuth returns a promise so the resolve waits for it to complete
      //     // If the promise is rejected, it will throw a $stateChangeError (see above)
      //     return Auth.$requireAuth();
      //   }]
      // }
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

.when('/logout', {
  redirectTo: '/'
})

.otherwise({
  redirectTo: '/'
});
});
