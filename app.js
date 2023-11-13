let userInput //prompt("Guess a number")

function newGuess(){
  userInput = prompt("Guess a number")
  count++
 }  
 let count = 0

//const userName = prompt("What is your name?");
function play(){
  let secretNumber = 7;
  newGuess()
  //let guess = prompt("Guess a number any number!");
  while(true){
    //let guess = prompt("Guess a number any number!");
    if(userInput==null){
      alert("Have a nice day!");
      break;
    }
    if(userInput < secretNumber) {
     alert("Too Low! Try again!");
     newGuess()
    }if (userInput > secretNumber) {
      alert("Too high! Try again");
      newGuess()
    if(userInput==secretNumber){
      if(count === 1){
        alert('Congrats you guessed correctly on your first try!');
      }
      alert(`Congrats you guessed correctly in ${count} tries`);
      break;
    }else if(newGuess() != number){
      break;
    }
  }
}console.log(count)
}

play()