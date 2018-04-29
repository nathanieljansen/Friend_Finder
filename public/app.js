$(function () {
  $(".hello").click(function () {
    alert("Hello!")
  })
  $(document).ready(function () {
    $('select').formSelect();
  });
  $(document).ready(function () {
    $('.modal').modal();
  });
})