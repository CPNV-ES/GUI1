var modal = $('#modal-content');
var course = JSON.parse(localStorage.course);

$('#course-name').text(course['name']);
$('#course-class').text(course['class']);
$('#course-room').text(course['room']);
$('#course-teacher').text(course['teacher']);
$('#course-time').text(course['startTime'] + ' - ' + course['endTime']);

$('#btn-course-absences').click(function () {
  modal.html('');
  modal.load('view/components/course-absences.html');
})

$('#btn-close-course').click(function () {
  $('#modal-course').html('');
})
