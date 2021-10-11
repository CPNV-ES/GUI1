let modalCourse = document.getElementById('modal-course');

modalCourse.style.display = 'none';

$(document).ready(function () {
  $('.course-card').click(function () {
    modalCourse.style.display = 'block';
  })

  $('.btn-close-course').click(function () {
    modalCourse.style.display = 'none';
  })
  $('#modal-background').click(function () {
    modalCourse.style.display = 'none';
  })
});

$('#modal-course-absences').load('components/course-absences.html');