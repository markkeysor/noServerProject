app.controller('usersCtrl', function($scope, registerService, $location) {

  $scope.users = function(newUser) {
    console.log(newUser);
    registerService.addUser(newUser);
    // $location.path('/dashboard');
  };


});
