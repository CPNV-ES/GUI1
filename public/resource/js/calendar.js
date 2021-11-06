const NB_DAYS_IN_WEEK = 5;
const COURSES = [
  [
    {
      name: 'Module: GUI1',
      startTime: '08:00',
      endTime: '09:35',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'MOTTIER André'
    },
    {
      name: 'Module: GUI1',
      startTime: '09:50',
      endTime: '12:15',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'MOTTIER André'
    },
    {
      name: 'Physique',
      startTime: '13:30',
      endTime: '16:05',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'PITTET Olivier'
    }
  ],
  [
    {
      name: 'Anglais',
      startTime: '08:50',
      endTime: '10:35',
      class: 'SI-T1a',
      room: 'SC-C435',
      teacher: 'CHARRERE Yann'
    },
    {
      name: 'Module: PRW1',
      startTime: '10:40',
      endTime: '12:15',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'CARREL XAVIER'
    },
    {
      name: 'Module: PRW1',
      startTime: '13:30',
      endTime: '16:05',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'CARREL XAVIER'
    },
    {
      name: 'Gestion et organisation',
      startTime: '16:10',
      endTime: '16:55',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'ZEN-RUFFINEN Xavier'
    }
  ],
  [
    {
      name: 'Mathématiques',
      startTime: '08:00',
      endTime: '09:35',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'DE-LAMEGO-RESENDE Ana'
    },
    {
      name: 'Module: CLD1',
      startTime: '09:50',
      endTime: '12:15',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'Hurni Pascal'
    },
    {
      name: 'MAW 1.1 - E-Commerce',
      startTime: '13:30',
      endTime: '16:05',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'Hurni Pascal'
    }
  ],
  [
    {
      name: 'Module: SQL1',
      startTime: '08:00',
      endTime: '10:35',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'ANDOLFATTO Frederique'
    },
    {
      name: 'Mathématiques',
      startTime: '10:40',
      endTime: '12:15',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'DE-LAMEGO-RESENDE Ana'
    },
    {
      name: 'Français',
      startTime: '13:30',
      endTime: '15:05',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'CIMENTI Gabriel'
    },
    {
      name: 'Module: SQL1',
      startTime: '15:20',
      endTime: '16:55',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'ANDOLFATTO Frederique'
    }
  ],
  [
    {
      name: 'Module: GPR1',
      startTime: '08:00',
      endTime: '09:35',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'GLASSEY Nicolas'
    },
    {
      name: 'MAW 1.1 - E-Commerce',
      startTime: '09:50',
      endTime: '12:15',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'GLASSEY Nicolas'
    },
    {
      name: 'Module: CLD1',
      startTime: '13:30',
      endTime: '16:05',
      class: 'SI-T1a',
      room: 'SC-C332',
      teacher: 'Hurni Pascal'
    }
  ],
  [],
  []
];

var date = new Date();
let daysBtnContainer = $('#component-days-btn-container');
let coursesCardContainer = $('#component-courses-card-container');

updateCalendarWeek();

function updateCalendarWeek() {

  // Weekly Days Buttons
  document.getElementById('day-value').textContent = date.getDate();
  document.getElementById('day-name').textContent = date.toLocaleString('default', {weekday: 'short'});
  document.getElementById('date').textContent = date.toLocaleString('default', { month: 'short' }) + ' ' + date.getFullYear();

  daysBtnContainer.html('');
  var firstDayOfTheWeek = dateFns.startOfWeek(date, {weekStartsOn: 1});

  for (let i = 0; i < NB_DAYS_IN_WEEK; i++) {
    var day = dateFns.addDays(firstDayOfTheWeek, i);
    var component = ((day.getDate() == date.getDate()) ? 'components/days-btn/active-days-btn.html' : 'components/days-btn/days-btn.html');

    jQuery.ajaxSetup({ async: false });
    $.get(component, function (data) {
      var dayBtn = $(data);
      dayBtn.attr('data-date', (day.toJSON(), new Date(day.getTime() - (day.getTimezoneOffset() * 60000)).toJSON()));
      dayBtn.find('.days-name').text(day.toLocaleString('default', {weekday: 'short'}));
      dayBtn.find('.days-value').text(day.getDate());

      daysBtnContainer.append(dayBtn)
    })
    jQuery.ajaxSetup({ async: true });
  }

  $('.days-btn').on('click', function(){
    var dayBtn = $(this);
    date = new Date(dayBtn.data('date'));
    updateCalendarWeek();
  })

  // Daily Courses Cards
  coursesCardContainer.html('');
  let course = COURSES[(date.getDate() - firstDayOfTheWeek.getDate())];
  
  for (let i = 0; i < course.length; i++) {
    jQuery.ajaxSetup({ async: false });
    $.get('components/course-card.html', '', function (data) {
      var card = $(data);

      $(card).find('.course-name').text(course[i]['name']);
      $(card).find('.course-start-time').text(course[i]['startTime']);
      $(card).find('.course-end-time').text(course[i]['endTime']);
      $(card).find('.course-class').text(course[i]['class']);
      $(card).find('.course-room').text(course[i]['room']);
      $(card).find('.course-teacher').text(course[i]['teacher']);

      coursesCardContainer.append(card);
    })
    jQuery.ajaxSetup({ async: true });
  }

  // Courses Cards Events
  $('.course-card').click(function () {
    $('#modal-course').load('components/course.html');
  })
}

// Days Buttons Events
$('#previous-week-btn').click(function () {
  date = dateFns.startOfWeek(dateFns.addDays(date, -7), {weekStartsOn: 1});
  updateCalendarWeek();
})

$('#next-week-btn').click(function () {
  date = dateFns.startOfWeek(dateFns.addDays(date, 7), {weekStartsOn: 1});
  updateCalendarWeek();
})

$('#today-btn').click(function () {
  date = new Date();
  updateCalendarWeek();
})

