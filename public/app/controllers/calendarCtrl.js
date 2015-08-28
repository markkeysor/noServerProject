app.controller('calendarCtrl', function($scope, calendarService){

  $scope.eventSources = [
    { events:
      [
        // {
        //   title : 'Test Event',
        //   start : '2015-08-25 10:00:00',
        //   end : '2015-08-25 11:30:00'
        // }
      ]
    }
];
  /* config object */
  $scope.uiConfig = {
    calendar: {
      height: 400,
      header: {
        left: 'agendaWeek,agendaDay',
        center: 'title',
        right: 'today prev,next'
      },
      defaultView: 'agendaWeek',
      firstHour: '10:00',
      hiddenDays: [0],
      minTime: "10:00:00",
      maxTime: "17:00:00",
      allDaySlot: false,
      selectable: true,
      select: function(start, end, allDay) {
        $scope.toggleModal();
        $scope.momentSelected = moment(start).format("YYYY-MM-DDTHH:mm:ss");
        console.log($scope.momentSelected);
      },
      // forceEventDuration: true,
      // eventReceive: function(event){
      //   event.end = event.start;
      //   console.log(event.start.format());
      //   event.end.add(2, 'h');
      //   console.log(event.start.format());
      //   }
  }
};

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
     title: service.name,
     start: $scope.momentSelected,
     end: endTime
   };
   $scope.eventSources[0].events.push(newEvent);
   $scope.toggleModal();
 };

});
