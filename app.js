function lowScore(name){
if(scores[name] == undefined){
    scores[name] = count
    alert(`NEW LOW SCORE: ${count} `)
}else if(scores[name]>count){ 
  scores[userName] = count
  alert(`NEW LOW SCORE: ${count} `)
}
}

let scores = {}

let userInput //prompt("Guess a number")
const userName = prompt("Enter your username")

function newGuess(){
  userInput = prompt("Guess a number")
  keepCount()
  }  

function playAgain(){
  let rerun = prompt(`Do you want to play again ${userName}? yes or no`)
  if(rerun === "yes"){
    play()
  } 
}
function keepCount(){
  allGuess.push(userInput)
  count++
}

let count = 0
let allGuess = []

function play(){
  debugger;
  let secretNumber = 7;
  count = 0
  newGuess()
  while(true){
    
    if(userInput==null){
      alert("Have a nice day!");
      break;
    }
    if(userInput < secretNumber) {
     alert(`Sorry ${userName} too Low! Try again!`);
     newGuess()
    }if (userInput > secretNumber) {
      alert(`Sorry ${userName} too high! Try again!`);
      newGuess()
    }
    if(userInput==secretNumber){
      if(count === 1){
        alert(`Congrats ${userName} you guessed correctly on your first try!`);
       lowScore(userName);
        playAgain();
      }
      alert(`Congrats ${userName} you guessed correctly in ${count} tries. Your guesses were `+allGuess);
      lowScore(userName);
      playAgain();
      break;
    }else if(userInput == NaN){
      break;
    }
  }
}


play()