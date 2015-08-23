
$(document).ready(function() {
  gameInstruction();
  newGame();
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
    $("span#count").val('0');
    $("ul#guessList").empty();
    generateNumber(1, 100);
  });
}

function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}