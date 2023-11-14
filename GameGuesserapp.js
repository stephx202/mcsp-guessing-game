function lowScore(){
if(count<scores['userName']){
  scores['userName'] = count
  alert(`NEW LOW SCORE: ${count} `)
}
}

let scores = {}

let userInput //prompt("Guess a number")
const userName = prompt("Enter your username")

function newGuess(){
  userInput = prompt("Guess a number")
  count++
 }  

function playAgain(){
  let rerun = prompt(`Do you want to play again ${userName}. yes or no`)
  if(rerun === "yes"){
    play()
  } 
}

function keepCount(){
  allGuess.push(userInput)
}

let count = 0
 let allGuess = []

//const userName = prompt("What is your name?");
function play(){
  let secretNumber = 7;
  newGuess()
  //let guess = prompt("Guess a number any number!");
  while(true){
    lowScore()
    //let guess = prompt("Guess a number any number!");
    if(userInput==null){
      alert("Have a nice day!");
      break;
    }
    if(userInput < secretNumber) {
     alert(`Sorry ${userName} too Low! Try again!`);
     newGuess()
     keepCount()
    }if (userInput > secretNumber) {
      alert(`Sorry ${userName} too high! Try again!`);
      newGuess()
      keepCount()
    }
    if(userInput==secretNumber){
      if(count === 1){
        alert(`Congrats ${userName} you guessed correctly on your first try!`);
        playAgain();
      }
      alert(`Congrats ${userName} you guessed correctly in ${count} tries. Your guesses were `+allGuess);
      playAgain();
      break;
    }else if(newGuess() == NaN){
      break;
    }
  }
}


play()