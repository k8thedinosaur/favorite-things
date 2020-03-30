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

    
  
    event.preventDefault();
  })
})