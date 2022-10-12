var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');

// sound effects
// var sfxRight = new Audio('assets/sfx/correct.wav');
// var sfxWrong = new Audio('assets/sfx/incorrect.wav');


function startQuiz() {
    // hide start screen
    document.getElementById('start-screen').style.display = 'none';

    // un-hide questions section
    document.getElementById('questions').style.display = 'block';

    // show starting time (high)
    document.getElementById('time').innerHTML = time;

    // start timer 
    var countdown = setInterval(function() {
        if (time > 0) {
            time--;
            document.getElementById('time').innerHTML = time;
        } else {
            clearInterval(countdown);
        }
        
        if( time <= 0) {
            quizEnd()
        }
    }, 1000);   
    getQuestion();
}


//this function retrieves data from the questions array
function getQuestion() { 
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex]

    // update title with current question
    var titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.title;

    // clear out any old question choices
    choicesEl.innerHTML = ''; 

    // for loop that creats a button for each choice
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        // creates an element named 'button'
        var choice = currentQuestion.choices[i];
        var buttonEl = document.createElement('button');

        // sets the attribute of the button to class='choice'
        buttonEl.setAttribute('class', 'choice');
        buttonEl.setAttribute('value', choice);
        buttonEl.textContent = currentQuestion.choices[i];
        // inserts a string into a text node, in this case, the answer choices from the questions array
        
        // appends the button and its text content to the choicesEl variable
        choicesEl.appendChild(buttonEl);
    }
}

function questionClick(event) {
    var buttonEl = event.target;
    // if the clicked element is not a choice button, do nothing.
    if (!buttonEl.matches('.choice')) {
        return;
    }
 
    // check if user guessed right or wrong
    if (buttonEl.value !== questions[currentQuestionIndex].answer) {
        time -= 15; 

        //replace true with a conditional statement that checks if the clicked choice button's value is the same as the questions[currentQuestionIndex]'s answer
        //incorrect answer scenario

        // penalize time
        if (time < 0) {
            time = 0;
        }
        // display new time on page
        timerEl.textContent = time;

        feedbackEl.textContent = "Wrong answer..."
    } else {
        //correct scenario
        feedbackEl.textContent = "Correct answer!"
        // move to next question
    }
    // flash right/wrong feedback on page
    feedbackEl.setAttribute('class', 'feedback');
    setTimeout(function() {
        feedbackEl.setAttribute('class', 'feedback hide');
    }, 3000);
    // move to next question
    currentQuestionIndex++;

    // check if we've run out of questions
    if (time <= 0 || currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}


function quizEnd() {
    // stop timer
    clearInterval(timerId);

    // show end screen
    var endScreenEl = document.getElementById('end-screen');
    endScreenEl.removeAttribute('class');

    // show final score
    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = time;

    // hide questions section
    questionsEl.setAttribute('class', 'hide');
}

function clockTick() {
    // update time
    time--;
    timerEl.textContent = time;

    // check if user ran out of time
    if (time <= 0) {
        quizEnd();
    }
}


function saveHighscore() {
    // get value of input box
    var initials = initialsEl.value.trim();

    // make sure value wasn't empty
    if (initials !== '') {
        //JSON.parse
        // get saved scores from localstorage (highscores), or if not any, set to empty array
        var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

        // format new score object for current user
        var newScore = {
            score: time,
            initials
        };

        // save to localstorage
        highscores.push(newScore);
        window.localStorage.setItem('highscores', JSON.stringify(highscores));

        // redirect to next page
        window.location.href = 'highscores.html';
    }
}

function checkForEnter(event) {
    if (event.key === 'Enter') {
        saveHighscore();
    }
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

// user clicks on element containing choices
choicesEl.onclick = questionClick;

initialsEl.onkeyup = checkForEnter;