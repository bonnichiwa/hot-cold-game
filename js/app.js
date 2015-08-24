
$(document).ready(function() {
  gameInstruction();
  newGame();
  giveFeedback();
});

function gameInstruction() {
    /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });
}

function newGame() {
  $("a.new").click(function(){
    $("span#count").text('0');
    $("ul#guessList").empty();
    generateNumber(1, 100);
  });
}

function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function giveFeedback() {
  // while("#userGuess" !== generateNumber()) { 
  $("#guessButton").click(function() {
    var currentGuess = $("#userGuess").val();
    $("ul#guessList").append("<li>"+ currentGuess + "</li>");
    $("span#count").text($("ul#guessList > li").size());
    $("#userGuess").val('');
    return false;
  // }
});
}