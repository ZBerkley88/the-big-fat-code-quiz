// add querySelector buttons to start the quiz
var startBtn = document.querySelector(".start-button");

// add querySelector buttons for the quiz answers
// make a function that allows the slideshow to move to the next question
    // can entire questions be stored in an array? can they be stored as objects?
// store user scores 
// make it so the timer begins on the click
var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);
// add scores to the localStorage
// when the timer = 0, take the user to the score input page
// after the score and name is collected, ask the user to play again