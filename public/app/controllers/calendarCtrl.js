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
      editable: true,
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
        var title = $scope.toggleModal();
        if(title) {
            $scope.uiConfig.fullCalendar('renderEvent', {
            title: title,
            start: start,
            end: end
          },
          true
        );
        }
      }
    }
  };

    $scope.services = [
        {id: 1, name: "Classic Full Set", price:"$95", time:"2 Hours"},
        {id: 2, name: "Volume Full Set", price:"$140", time:"3 Hours"},
        {id: 3, name: "Classic Fill", price:"$45", time:"1 Hour 15 Minutes"},
        {id: 4, name: "Volume Fill", price:"$60", time:"1 Hour 30 Minutes"}
      ];

$scope.modalShown = false;
 $scope.toggleModal = function() {
   $scope.modalShown = !$scope.modalShown;
 };

});
