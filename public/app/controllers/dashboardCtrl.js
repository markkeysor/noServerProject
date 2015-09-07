app.controller('dashboardCtrl', function($scope, $firebaseAuth, $location, userBoiId, registerService, appointmentService) {

  var ref = new Firebase("https://maggslashes.firebaseio.com/");

  var auth = $firebaseAuth(ref);
  console.log("userBoiId", userBoiId);


  ref.onAuth(function(authData) {
    if (authData) {
      // registerService.setUser(authData)
      console.log("User is authenticated with uid:", authData);

    }
    else {
      console.log("no longer authenticated");
      $location.path('/');
    }
  });

  $scope.logOut = function() {
    $location.path('/');
    ref.unauth();
  };

  registerService.findById(userBoiId)
    .then(function(response){
      $scope.user = response.data[0];
    });

  appointmentService.userAppointments(userBoiId)
    .then(function(response) {
      // console.log(response);
      $scope.appointments = response;
    });

});




app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
});
