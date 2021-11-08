var course = JSON.parse(localStorage.course);

$('#course-name').text(course['name']);
$('#course-class').text(course['class']);
$('#course-room').text(course['room']);
$('#course-teacher').text(course['teacher']);
$('#course-time').text(course['startTime'] + ' - ' + course['endTime']);

$('#btn-back').click(function () {
  $('#modal-content').html('')
  $('#modal-content').load('components/course-info.html')
})

$('.btn-student').click(function () {
  var element = $(this);

  if ($('#absences-management').length) {
    $('#absences-management').remove();
  }

  $.get('components/course-manage-absences.html', function (data) {
    element.append(data);
  })
})
