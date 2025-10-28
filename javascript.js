let humanScore = 0;
let computerScore = 0



const result = document.createElement("div");
const buttons = document.querySelectorAll(".button");
const sect = document.querySelector(".container");
const scoreDisplay = document.createElement('div')
scoreDisplay.className = "roundWinner";
const game = document.createElement("div")
scoreDisplay.appendChild(result)
sect.appendChild(scoreDisplay)
sect.appendChild(game)
const Score = document.createElement("div")

sect.appendChild(Score)
buttons.forEach((button) =>  button.addEventListener("click", (playRound)))

function getComputerChoice(){
   const ComputerChoice =  Math.floor(Math.random()*3)
     if (ComputerChoice == 1){
        return 'Rock'}
    else if(ComputerChoice == 0){
        return 'Paper'}
   else if (ComputerChoice == 2) {
    return 'Scissors'
   }
   
     return ComputerChoice
     
}
function  playRound(e){
     if(computerScore < 5 && humanScore < 5 ){
    const ComputerChoice = getComputerChoice().toLowerCase();
    let HumanChoice = e.target.id.toLowerCase();
   
    if(HumanChoice === ComputerChoice){
        
        result.textContent = `round is a draw: Player ${HumanChoice} : Computer;${ComputerChoice}`
    }
    else if ((HumanChoice === 'rock' && ComputerChoice === 'scissors') ||
     (HumanChoice === 'paper' && ComputerChoice === 'rock')|| 
        (HumanChoice === 'scissors' && ComputerChoice === 'paper')){
          result.textContent = `Winner of the round!! ${HumanChoice} beats ${ComputerChoice} : `
        humanScore++
    }
    else {
       result.textContent =  `Loser of  the round!! ${ComputerChoice}  beats  ${HumanChoice}: `
        computerScore++
    }
}       
      updateScore()
      gameWinner()
   
    

}
function updateScore(){
    Score.textContent = `Current scores - Human:${humanScore} | Computer: ${computerScore}`
}
function gameWinner(){
    if (humanScore == 5 )
    {
        game.textContent = ("You win 5 rounds")
        disableButtons();
        
    }else if (computerScore == 5 ){
        game.textContent = ("You lose the 5 rounds")
        disableButtons();
        
    } 
    
   
}
function disableButtons(){
    buttons.forEach(button => button.disabled = true)
}
updateScore()
