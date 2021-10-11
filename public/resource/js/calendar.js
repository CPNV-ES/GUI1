const courses = [
  {
    name: 'Mathematics',
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
]

for (let i = 0; i < courses.length; i++) {
  $.get('components/course-card.html', '', function (data) {
    var card = $(data);

    $(card).find(".course-name").text(courses[i]['name']);
    $(card).find(".course-start-time").text(courses[i]['startTime']);
    $(card).find(".course-end-time").text(courses[i]['endTime']);
    $(card).find(".course-class").text(courses[i]['class']);
    $(card).find(".course-room").text(courses[i]['room']);
    $(card).find(".course-teacher").text(courses[i]['teacher']);

    $('#courses-cards').append(card);
  })
}

$('#modal-course').load('components/course.html');
