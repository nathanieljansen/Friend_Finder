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
      photo: $(".yourPicture").val().trim(),
      scores: [$(".choice1").val(), $(".choice2").val(), $(".choice3").val(), $(".choice4").val(), $(".choice5").val(), $(".choice6").val(), $(".choice7").val(), $(".choice8").val(), $(".choice9").val(), $(".choice10").val(),]
    };
    // Question: What does this code do??
    $.post("/api/friends", friends).then(function () {
      console.log("YOU MOM");
    });


  });
})