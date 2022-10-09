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
    var count = time;
    var countdown = setInterval(function() {
        if (count > 0) {
            count--;
            document.getElementById('time').innerHTML = count;
        } else {
            clearInterval(countdown);
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
        var buttonEl = document.createElement('button');
        // creates a variable to reference the question box element
        var questionsEl = document.getElementById('questions')
        // sets the attribute of the button to class='choice'
        buttonEl.setAttribute('class', 'choice');
        // inserts a string into a text node, in this case, the answer choices from the questions array
        buttonEl.textContent = currentQuestion.choices[i];
        // appends the button and its text content to the #questions div container
        questionsEl.appendChild(buttonEl);
    }
}

function questionClick(event) {
    var buttonEl = event.target;
    console.log('clicked on answer')

    // if the clicked element is not a choice button, do nothing.
    if (!buttonEl.matches('.choice')) {
        return;
    }

    // check if user guessed right or wrong
    if (true) { //replace true with a conditional statement that checks if the clicked choice button's value is the same as the questions[currentQuestionIndex]'s answer
        //incorrect answer scenario

        // penalize time
        // display new time on page
    } else {
        //correct scenario

        // move to next question
    }
    // flash right/wrong feedback on page

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
        

        // format new score object for current user
        

        // save to localstorage
        

        // redirect to next page
        window.location.href = 'highscores.html';
    }
}

function checkForEnter(event) {
    // "13" represents the enter key
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