$('#btn-course-absences').click(function () {
  $('#modal-content').html('')
  $('#modal-content').load('components/course-absences.html')
})

$('#btn-close-course').click(function () {
  $('#modal-course').html('')
})