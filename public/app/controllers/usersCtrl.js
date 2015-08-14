app.controller('usersCtrl', function($scope, registerService) {

  $scope.users = function(newUser) {
    console.log(newUser);
    registerService.addUser(newUser);
  }


});
