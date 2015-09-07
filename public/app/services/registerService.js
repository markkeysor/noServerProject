app.service('registerService', function($http, $q) {

  this.addUser = function(user) {
    console.log('user in service',user);
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

  this.findByEmail = function(email){
    return $http({
      method: 'GET',
      url: '/user?email=' + email
    });
  };

  this.findById = function(_id){
      return $http({
        method: 'GET',
        url: '/user?_id=' + _id
      });
    };

  this.user;

  this.setUser = function(user){
    this.user = user;
  }

});
