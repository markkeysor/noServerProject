app.service('appointmentService', function($http, $q) {

  this.addAppointment = function(appt) {
    var dfd = $q.defer();
    $http({
      method: 'POST',
      url: '/appt',
      data: appt
    }).then(function(response) {
      dfd.resolve(response.data);
    });
    return dfd.promise;
  };

  this.retrieveAppt = function() {
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: '/appt'
    }).then(function(response) {
      dfd.resolve(response.data);
    });
    return dfd.promise;
  };


});
