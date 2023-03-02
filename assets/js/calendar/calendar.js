document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');

  const events = [
    {
      title: 'All Day Event',
      start: '2023-03-01'
    },
    {
      title: 'Long Event',
      start: '2023-03-07',
      end: '2023-03-10'
    },
    {
      groupId: 999,
      title: 'Repeating Event',
      start: '2023-03-09T16:00:00'
    },
    {
      groupId: 999,
      title: 'Repeating Event',
      start: '2023-03-16T16:00:00'
    },
    {
      title: 'Conference',
      start: '2023-03-11',
      end: '2023-03-13'
    },
    {
      title: 'Meeting',
      start: '2023-03-12T10:30:00',
      end: '2023-03-12T12:30:00'
    },
    {
      title: 'Conference',
      start: '2023-03-15',
      end: '2023-03-15'
    },
    {
      title: 'Meeting',
      start: '2023-03-15T17:30:00',
      end: '2023-03-15T18:30:00'
    },
    {
      title: 'Conference',
      start: '2023-03-16',
      end: '2023-03-16'
    },
    {
      title: 'Meeting',
      start: '2023-03-16T16:30:00',
      end: '2023-03-16T17:30:00'
    },
    {
      title: 'Meeting',
      start: '2023-03-19T10:30:00',
      end: '2023-03-19T11:30:00'
    },
    {
      title: 'Lunch',
      start: '2023-03-19T12:00:00'
    },
    {
      title: 'Lunch',
      start: '2023-03-12T12:00:00'
    },
    {
      title: 'Meeting',
      start: '2023-03-12T14:30:00'
    },
    {
      title: 'Happy Hour',
      start: '2023-03-12T17:30:00'
    },
    {
      title: 'Happy Hour',
      start: '2023-03-19T13:30:00'
    },
    {
      title: 'Dinner',
      start: '2023-03-12T20:00:00'
    },
    {
      title: 'Birthday Party',
      start: '2023-03-13T07:00:00'
    },
    {
      title: 'Click for Google',
      url: 'http://google.com/',
      start: '2023-03-28'
    }
  ]

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridDay',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear,listDay,addtask,addtable'
    },
    views: {
      listDay: { buttonText: 'Schedule' },
      timeGridDay: { buttonText: 'Day' },
      timeGridWeek: { buttonText: 'Week' },
      dayGridMonth: { buttonText: 'Month' },
      multiMonthYear: { buttonText: 'Year' },
    },
    selectable: true,
    customButtons: {
      addtask: {
        text: 'Add Task',
        click: function() {
          const modal = document.querySelector('#taskModal')
          const taskModal = new bootstrap.Modal(modal)
          taskModal.show()
        }
      },
      addtable: {
        text: 'View Table',
        click: function() {
          const modalTable = document.querySelector('#tableModal')
          const tableModal = new bootstrap.Modal(modalTable)
          tableModal.show()
        }
      },
    },
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: events
  });
  
  calendar.render();
});