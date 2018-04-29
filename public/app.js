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

  $(".submitButton").on("click", function (event) {
    event.preventDefault();
    let friends = {
      name: $(".yourName").val().trim(),
      photo: $(".yourPicture").val().trim()
    };
    // Question: What does this code do??
    $.post("/api/friends", friends).then(function () {
      console.log("YOU MOM");
    });


  });
})