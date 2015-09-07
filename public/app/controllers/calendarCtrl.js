app.controller('calendarCtrl', function($scope, appointmentService, registerService, getappts){
  // console.log('doodoo bunz');
  $scope.userId = registerService.user;
  // console.log($scope.userId);

  $scope.eventSources = [
    { events: getappts

    }
];

  /* config object */
  $scope.uiConfig = {
    calendar: {
      height: 554,
      aspectRatio: 2,
      header: {
        left: 'title',
        // center: 'title',
        right: 'today prev,next'
      },
      defaultView: 'agendaWeek',
      firstHour: '10:00',
      hiddenDays: [0],
      minTime: "10:00:00",
      maxTime: "20:00:00",
      allDaySlot: false,
      selectable: true,
      select: function(start, end, allDay) {
        var check = start._d.toJSON().slice(0,10);
        var today = new Date().toJSON().slice(0,10);
        if(check < today)
        {
            // Previous Day. show message if you want otherwise do nothing.
                    // So it will be unselectable
        }
        else
        {
          $scope.toggleModal();
          $scope.momentSelected = moment(start).format("YYYY-MM-DDTHH:mm:ss");
        }

      },
      eventClick: function(calEvent, jsEvent, view) {

        alert('Event: ' + calEvent.title);
        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        alert('View: ' + view.name);

        // change the border color just for fun
        $(this).css('border-color', 'red');

    }


  }
};

// $scope.uiConfigCaylee = {
//   calendar: {
//     height: 554,
//     aspectRatio: 2,
//     header: {
//       left: 'agendaWeek,agendaDay',
//       center: 'title',
//       right: 'today prev,next'
//     },
//     defaultView: 'agendaWeek',
//     firstHour: '10:00',
//     hiddenDays: [0],
//     minTime: "10:00:00",
//     maxTime: "20:00:00",
//     allDaySlot: false,
//     selectable: true,
//     select: function(start, end, allDay) {
//       var check = start._d.toJSON().slice(0,10);
//       var today = new Date().toJSON().slice(0,10);
//       if(check < today)
//       {
//           // Previous Day. show message if you want otherwise do nothing.
//                   // So it will be unselectable
//       }
//       else
//       {
//         $scope.toggleModal();
//         $scope.momentSelected = moment(start).format("YYYY-MM-DDTHH:mm:ss");
//       }
//
//     },
//     eventClick: function(calEvent, jsEvent, view) {
//
//       alert('Event: ' + calEvent.title);
//       alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
//       alert('View: ' + view.name);
//
//       // change the border color just for fun
//       $(this).css('border-color', 'red');
//
//   }
//
//
// }
// };

  $scope.services = [
        {id: 1, name: "Classic Full Set", price:"$" + 95, time:"2 Hours", value: 120},
        {id: 2, name: "Volume Full Set", price:"$" + 140, time:"3 Hours", value: 180},
        {id: 3, name: "Classic Fill", price:"$" + 45, time:"1 Hour 15 Minutes", value: 75},
        {id: 4, name: "Volume Fill", price:"$" + 60, time:"1 Hour 30 Minutes", value: 90}
      ];


$scope.modalShown = false;
 $scope.toggleModal = function() {
   $scope.modalShown = !$scope.modalShown;
 };

 $scope.addNewEvent = function(service) {
   var endTime = moment($scope.momentSelected).add(service.value, 'm');
   var newEvent = {
     title : service.name,
     start : $scope.momentSelected,
     end : endTime.format("YYYY-MM-DDTHH:mm:ss"),
     user: $scope.userId
   };

   $scope.eventSources[0].events.push(newEvent);
   $scope.toggleModal();
   appointmentService.addAppointment(newEvent);
 };




});
