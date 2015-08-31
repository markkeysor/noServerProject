app.service('registerService', function($http, $q) {

  this.addUser = function(user) {
    console.log('user in service',user)
    var dfd = $q.defer();
    $http({
      method: 'POST',
      url: '/user',
      data: user
    }).then(function(response) {
      console.log(response.data);
      dfd.resolve(response.data);
    });
    return dfd.promise;
  };


});
