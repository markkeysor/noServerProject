app.controller('dashboardCtrl', function($scope, $firebaseAuth, $location, userBoiId, registerService) {

  $scope.user;
  var ref = new Firebase("https://maggslashes.firebaseio.com/");

  var auth = $firebaseAuth(ref);
  console.log("userBoiId", userBoiId)
//   app.controller("AccountCtrl", ["currentAuth", function(currentAuth) {
//   // currentAuth (provided by resolve) will contain the
//   // authenticated user or null if not logged in
// }]);

  // console.log(auth);
  console.log("Matt is pretty much awesome");

  ref.onAuth(function(authData) {
    if (authData) {
      console.log("User is authenticated with uid:", authData);

    }
    else {
      console.log("no longer authenticated");
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

});

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
});
