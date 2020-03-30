$(document).ready(function() {
  
  $("#favorite-form").submit(function(event) {
    // var catAnswers;
    // $("input#cat-type").val();
    // $("input#cat-part").val();
    // $("input#cat-color").val();
    
    var catAnswers = [$("input#cat-type").val(),
    $("input#cat-part").val(),
    $("input#cat-color").val()];
    console.log(catAnswers);

    $(".cat-type").append(catAnswers[0]);
    $(".cat-part").append(catAnswers[1]);
    $(".cat-color").append(catAnswers[2]);

    $("#answers").show();
    
    event.preventDefault();
  })
})