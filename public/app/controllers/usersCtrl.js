app.controller('usersCtrl', function($scope, registerService, $location) {
  var currentUser;

  $scope.users = function(newUser) {
    console.log(newUser);
    registerService.addUser(newUser);
    var ref = new Firebase("https://maggslashes.firebaseio.com/");
    ref.createUser({
      first_name: newUser.first_name,
      last_name:  newUser.last_name,
      email: newUser.email,
      password: newUser.password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        currentUser = userData;
        console.log("Successfully created user account with uid:", userData);
        $scope.logUserIn(newUser);
      }
    });
  };

  $scope.logUserIn = function(user) {
    // registerService.setEmail(user.email)
    var ref = new Firebase("https://maggslashes.firebaseio.com/");
    ref.authWithPassword({
     email    : user.email,
     password : user.password
    }, function(error, authData) {
     if (error) {
       console.log("Login Failed!", error);
     } else {
      console.log("Authenticated successfully with payload:", authData);
      //  console.log(currentUser)
      registerService.findByEmail(user.email)
        .then(function(response){
          $location.path('/dashboard/' + response.data[0]._id);
          // $scope.$apply();
        })
     }
     }, {
        remember: "sessionOnly"
     });
  };



});
