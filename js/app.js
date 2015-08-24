
$(document).ready(function() {
  
  gameInstruction();
  generateNumber();
  newGame();
  guessComparison();
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
      var currentGuess = $("#userGuess").val();
      if(($.isNumeric(currentGuess)) && (currentGuess >= 0) && (currentGuess <= 100)) {
        $("ul#guessList").append("<li>"+ currentGuess + "</li>");
        $("span#count").text($("ul#guessList > li").size());
        $("#userGuess").val('');
        console.log("User guess = " + currentGuess);
        guessComparison();
        return false;
      } else {
        alert("You need to enter a valid number.");
        $("#userGuess").val('');
        return false;
      }
    });
  }

  /*--- Determine if using negative or positive comparison ---*/
  function guessComparison() {
    if (randomNumber - $("#userGuess").val() > 0) {
      positiveComparison();
    } else {
      negativeComparison();
    }
  }


  /*--- Set feedback ---*/

  function setFeedback() {
    $("h2#feedback").text(feedback);
  }

  /*--- Feedback changed according to user input ---*/

  function positiveComparison() { 
    var generateDiff = randomNumber - $("userGuess").val();
    console.log(generateDiff);  
    switch(true) {
    case(generateDiff >= 50) :
      setFeedback("Ice Cold");
      break;
    case((generateDiff >= 30) && (generateDiff <= 49)):
      setFeedback('Cold');
      break;
    case((generateDiff >= 20) && (generateDiff <= 29)):
      setFeedback('Warm');
      break;
    case((generateDiff >= 10) && (generateDiff <= 19)):
      setFeedback('Hot');
      break;
    case((generateDiff >= 1) && (generateDiff <= 9)):
      setFeedback('Boiling Hot!');
      break;
    case(generateDiff = 0):
      alert("Congrats, you've beat the game!");
      setFeedback('Bulls Eye!');
      break;
    }
  }

  function negativeComparison() {
    var generateDiff = currentGuess - randomNumber;
    console.log(generateDiff);  
    switch(true) {
    case(generateDiff >= 50) :
      setFeedback("Ice Cold");
      break;
    case((generateDiff >= 30) && (generateDiff <= 49)):
      setFeedback('Cold');
      break;
    case((generateDiff >= 20) && (generateDiff <= 29)):
      setFeedback('Warm');
      break;
    case((generateDiff >= 10) && (generateDiff <= 19)):
      setFeedback('Hot');
      break;
    case((generateDiff >= 1) && (generateDiff <= 9)):
      setFeedback('Boiling Hot!');
      break;
    case(generateDiff = 0):
      alert("Congrats, you've beat the game!");
      setFeedback('Bulls Eye!');
      break;
    }
  }

  

});