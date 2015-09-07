app.controller('signedInCtrl', function($scope, $location, registerService){

  if(registerService.user.length > 0){
    $location.path('/dashboard/' + registerService.user);
  }

});
