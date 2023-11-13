// const userName = prompt("What is your name?");
let guess = prompt("Guess a number any number!");
function play(guess) {
    let secretNumber = 7;
    if(guess===null){
      alert("Have a nice day!");
    }else if(guess < secretNumber) {
     alert("Too Low! Try again!")
     return guess= prompt("Guess a number any number!")
    }else if (guess > secretNumber) {
      alert("Too high!")
      return guess = prompt("Guess a number any number!")
    }else if(guess==secretNumber){
      alert("Correct!");
    }
  }
  
  play(guess);