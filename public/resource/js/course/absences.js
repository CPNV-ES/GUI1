$('#btn-back').click(function () {
  $('#modal-content').html('')
  $('#modal-content').load('components/course-info.html')
})

$('.btn-student').click(function () {
  var element = $(this)

  if ($('#absences-management').length) {
    $('#absences-management').remove()
  }

  $.get('components/course-manage-absences.html', function (data) {
    element.append(data)
  })
})
