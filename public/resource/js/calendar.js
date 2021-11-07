import { view, week } from './options.js';

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

if (localStorage.getItem('date') === null) {
  localStorage.date = new Date();
}

var daysBtnContainer = $('#component-days-btn-container');
var coursesCardContainer = $('#component-courses-card-container');

updateCalendarWeek();

function updateCalendarWeek() {
  let date = new Date(localStorage.date);

  // Weekly Days Buttons
  document.getElementById('day-value').textContent = date.getDate();
  document.getElementById('day-name').textContent = date.toLocaleString('default', {weekday: 'short'});
  document.getElementById('date').textContent = date.toLocaleString('default', { month: 'short' }) + ' ' + date.getFullYear();

  daysBtnContainer.html('');
  let firstDayOfTheWeek = dateFns.startOfWeek(date, {weekStartsOn: 1});

  for (let i = 0; i < localStorage.weekSize; i++) {
    let day = dateFns.addDays(firstDayOfTheWeek, i);
    let component = ((day.getDate() == date.getDate()) ? 'components/days-btn/active-days-btn.html' : 'components/days-btn/days-btn.html');

    jQuery.ajaxSetup({ async: false });
    $.get(component, function (data) {
      let dayBtn = $(data);
      dayBtn.attr('data-date', (day.toJSON(), new Date(day.getTime() - (day.getTimezoneOffset() * 60000)).toJSON()));
      dayBtn.find('.days-name').text(day.toLocaleString('default', {weekday: localStorage.weekSize > week.WORK ? 'narrow' : 'short'}));
      dayBtn.find('.days-value').text(day.getDate());

      dayBtn.click(function () {
        let dayBtn = $(this);
        localStorage.date = new Date(dayBtn.data('date'));
        updateCalendarWeek();
      })

      daysBtnContainer.append(dayBtn)
    })
    jQuery.ajaxSetup({ async: true });
  }
  
  // Daily Courses Cards
  coursesCardContainer.html('');

  jQuery.ajaxSetup({ async: false });
  let header = $('#calendar-header');

  if (localStorage.viewMode == view.DAY) {
    if (header.hasClass('hidden')) {
      header.removeClass('hidden');
    }

    let course = COURSES[(date.getDate() - firstDayOfTheWeek.getDate())];
    for (let i = 0; i < course.length; i++) {
      renderCourse(course[i], coursesCardContainer)
    }
  } else if (localStorage.viewMode == view?.WEEK) {
      if (!header.hasClass('hidden')) {
        header.addClass('hidden');
      }

    for (let x = 0; x < localStorage.weekSize; x++) {
      let course = COURSES[x];
      let day = dateFns.addDays(firstDayOfTheWeek, x);

      let weekElement = $('<div id="week-container" class="flex flex-row mt-10"></div>');
      coursesCardContainer.append(weekElement);

      let dayElement = $(
        '<div class="days flex flex-col flex-grow mx-2 text-center"><h2 class="capitalize">'+
          day.toLocaleString('default', { weekday: "narrow" }) + 
        '</h2></div>');

      $('#week-container').append(dayElement);
      for (let i = 0; i < course.length; i++) {
        renderCourse(course[i], dayElement)
      }
    }
  }
  jQuery.ajaxSetup({ async: true });
}

function renderCourse(course, parent) {
  let component = (localStorage.viewMode == view?.DAY) ? 
    'components/day-course-card.html' : 
    'components/week-course-card.html';
  $.get(component, '', function (data) {
    let card = $(data);

    card.find('.course-name').text(course['name']);
    card.find('.course-start-time').text(course['startTime']);
    card.find('.course-end-time').text(course['endTime']);
    card.find('.course-class').text(course['class']);
    card.find('.course-room').text(course['room']);
    card.find('.course-teacher').text(course['teacher']);

    card.click(function () {
      localStorage.course = JSON.stringify(course);

      $.get('modals/course.html', '', function (modalCourseElement) {
        let modalCourse = $(modalCourseElement);

        modalCourse.find('#modal-background').click(function () {
          $('#modal-course').html('');
        })

        $('#modal-course').append(modalCourse);
      })
    })

    parent.append(card);
  })
}

// Days Buttons Events
$('#previous-week-btn').click(function () {
  localStorage.date = dateFns.startOfWeek(dateFns.addDays(localStorage.date, -7), {weekStartsOn: 1});
  updateCalendarWeek();
})

$('#next-week-btn').click(function () {
  localStorage.date = dateFns.startOfWeek(dateFns.addDays(localStorage.date, 7), {weekStartsOn: 1});
  updateCalendarWeek();
})

$('#today-btn').click(function () {
  localStorage.date = new Date();
  updateCalendarWeek();
})

export { updateCalendarWeek }