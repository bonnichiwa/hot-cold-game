
$(document).ready(function() {
  
  gameInstruction();
  generateNumber();
  newGame();
  validateGuess();


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

  /*--- Random number generator--- */

  function generateNumber() {
    randomNumber = (Math.floor(Math.random() * 100));
    console.log("Random number generated = " + randomNumber);
  }

  /*--- New game ---*/

  function newGame() {
    $("a.new").click(function(){
      $("span#count").text('0');
      $("ul#guessList").empty();
    });
  }

  /*--- validate if guess is valid number ---*/

  function validateGuess() {
    $("#guessButton").click(function() {
      currentGuess = $("#userGuess").val();
      if(($.isNumeric(currentGuess)) && (currentGuess >= 0) && (currentGuess <= 100)) {
        $("ul#guessList").append("<li>"+ currentGuess + "</li>");
        $("span#count").text($("ul#guessList > li").size());
        $("#userGuess").val('');
        console.log("User guess = " + currentGuess);
        guessComparison(randomNumber, currentGuess);
        return false;
      } else {
        alert("You need to enter a valid number.");
        $("#userGuess").val('');
        return false;
      }
    });
  }

  /*--- Determine if using negative or positive comparison ---*/

  function guessComparison(randomNum, userInput) {
    console.log("Guess diff = " + ((randomNum) - (userInput)) );
    comparisonDiff = (randomNum - userInput);
    if (comparisonDiff >= 0) {
      positiveComparison(comparisonDiff);
    } else {
      negativeComparison(comparisonDiff);
    }
  }

  /*--- Set feedback ---*/

  function setFeedback(feedback) {
    $("#feedback").text(feedback);
  }

  /*--- Feedback changed according to user input ---*/

  function positiveComparison(comparison) { 
    console.log(comparison);  
    switch(true) {
    case(comparison >= 50) :
      setFeedback("Ice Cold");
      break;
    case((comparison >= 30) && (comparison <= 49)):
      setFeedback('Cold');
      break;
    case((comparison >= 20) && (comparison <= 29)):
      setFeedback('Warm');
      break;
    case((comparison >= 10) && (comparison <= 19)):
      setFeedback('Hot');
      break;
    case((comparison >= 1) && (comparison <= 9)):
      setFeedback('Boiling Hot!');
      break;
    case(comparison == 0):
      alert("Congrats, you've beat the game!");
      setFeedback('Bulls Eye!');
      break;
    }
  }

  function negativeComparison(comparison) {
    console.log(comparison);  
    switch(true) {
    case(comparison <= -50) :
      setFeedback("Ice Cold");
      break;
    case((comparison <= -30) && (comparison >= -49)):
      setFeedback('Cold');
      break;
    case((comparison <= -20) && (comparison >= -29)):
      setFeedback('Warm');
      break;
    case((comparison <= -10) && (comparison >= -19)):
      setFeedback('Hot');
      break;
    case((comparison <= -1) && (comparison >= -9)):
      setFeedback('Boiling Hot!');
      break;
    case(comparison == 0):
      alert("Congrats, you've beat the game!");
      setFeedback('Bulls Eye!');
      break;
    }
  }

  

});