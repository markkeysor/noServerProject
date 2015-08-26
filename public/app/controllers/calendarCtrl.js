app.controller('calendarCtrl', function($scope, calendarService){

  $scope.eventSources = [
    { events:
      [
        {
          title : 'Test Event',
          start : '2015-08-25T10:00:00',
          end : '2015-08-25T11:30:00'
        }
      ]
    }
];
  // var calendar = $scope.uiConfig;
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
        $scope.momentSelected = moment().format();
        console.log($scope.momentSelected);
      }
    }
  };

    $scope.services = [
        {id: 1, name: "Classic Full Set", price:"$" + 95, time:"2 Hours"},
        {id: 2, name: "Volume Full Set", price:"$" + 140, time:"3 Hours"},
        {id: 3, name: "Classic Fill", price:"$" + 45, time:"1 Hour 15 Minutes"},
        {id: 4, name: "Volume Fill", price:"$" + 60, time:"1 Hour 30 Minutes"}
      ];

    $scope.eventLength = function(lashService) {
          if(lashService.id === 1) {
            console.log("Classic Full Set");
          }
          else if(lashService.id === 2) {
              console.log("Volume Full Set");
          }
          else if(lashService.id === 3) {
              console.log("Classic Fill");
          }
          else if(lashService.id === 4) {
              console.log("Volume Fill");
          }
    };

$scope.modalShown = false;
 $scope.toggleModal = function() {
   $scope.modalShown = !$scope.modalShown;
 };

 $scope.addNewEvent = function() {
   var m = $scope.momentSelected;
   console.log("I've been clicked!");
   console.log(m);
 //   var event = {
 //     title: title,
 //     start: start,
 //     end: end
 //   };
 //   $scope.eventSources.events.push(event);
 };

});
