# the-big-fat-code-quiz

## Description

The purpose of this exercise was to create a short, multiple choice coding quiz. Upon clicking the start button, the page displays a question and four possible answers. It also begins a timer which is proportional to the length of the quiz. 

For each answer a user chooses, the application displays a message stating whether the chosen answer was correct. If the user chooses an incorrect answer, fifteen seconds are deducted from the timer. The quiz ends if the user answers every question, or the timer runs out.

Upon completion of the quiz, the application displays an input form asking for the user's name. The user's name and score are then stored on the high score page.

I really struggled on this project. There was a lot of code and a lot of places to trip up. The biggest struggle I had was getting the `clickQuestion()` function to work properly. For a long time, the function would not initiate. 

The problem was solved when I found that the `buttonEl` in the `getQuestion()` function was not being appended to the correct div container (line 71). Once this was fixed, the `clickQuestion()` function became responsive and I was able to finish the project.

I am happy that the project is in a more complete state, but I would like to build upon this one in the future. I was working on it until the last minute, and I did not have as much time to experiment with the completed application.

Link: [The Big Fat Coding Quiz Project](https://zberkley88.github.io/the-big-fat-code-quiz/)

![The Big Fat Coding Quiz Project](./assets/images/Screenshot%202022-10-11%20225637.jpg)


## Installation

n/a 

## Usage

 n/a

## Credits

n/a 

## License

Please refer to the LICENSE in the repo.