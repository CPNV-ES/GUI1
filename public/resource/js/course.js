let modal = document.getElementById('modal-course')

modal.style.display = 'none';

$(document).ready(function () {
  $('.course-card').click(function () {
    modal.style.display = 'block'
  })

  $('.btn-close-course').click(function () {
    modal.style.display = 'none'
  })
  $('#modal-background').click(function () {
    modal.style.display = 'none'
  })
});