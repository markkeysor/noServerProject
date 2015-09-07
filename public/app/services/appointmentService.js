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

  this.userAppointments = function(userId) {
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: '/appt?user=' + userId
    }).then(function(response) {
      response = response.data
      console.log(response);
      for (var i = 0; i < response.length; i++) {
        response[i].cita = moment(response[i].start).format('MMMM Do h:mm') + ' - ' + moment(response[i].end).format('h:mm a');
      }


      dfd.resolve(response);
    });
    return dfd.promise;
  };


});
