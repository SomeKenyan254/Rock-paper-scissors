humanScore = 0;
computerScore = 0;
roundScore = 0;

const result = document.createElement("div");
const buttons = document.querySelectorAll(".button");
const sect = document.querySelector(".container");
const game = document.createElement("div")
sect.appendChild(result)
sect.appendChild(game)
const Score = document.createElement("div")

sect.appendChild(Score)


function getComputerChoice(){
    ComputerChoice =  Math.floor(Math.random()*3)
     if (ComputerChoice == '1'){
        return 'Rock'}
    else if(ComputerChoice == '0'){
        return 'Paper'}
   else if (ComputerChoice == '2') {
    return 'Scissors'
   }
   
     return ComputerChoice
     
}
function  playRound(e){
    ComputerChoice = getComputerChoice().toLowerCase()
    HumanChoice = e.target.id.toLowerCase();
    gameWinner()


   
    if(HumanChoice === ComputerChoice){
        
        result.textContent = [`round is a draw you both picked ${ComputerChoice}`]
    }
    else if ((HumanChoice === 'rock' && ComputerChoice === 'scissors') ||
     (HumanChoice === 'paper' && ComputerChoice === 'rock')
        || 
        (HumanChoice === 'scissors' && ComputerChoice === 'paper')){
          
    
        result.textContent = [`Winner of the round!! ${HumanChoice} beats ${ComputerChoice} : `]
        humanScore++
    }
    else {
       
     
        result.textContent = [ `Loser of  the round!! ${ComputerChoice}  beats  ${HumanChoice}: `]
        computerScore++
    }
   
    

}
function gameWinner(){
    
    if (humanScore == 5 && computerScore < humanScore)
    {
        game.textContent = ("You win 5 rounds")
    }else if (computerScore == 5 && humanScore < computerScore){
        game.textContent = ("You lose the 5 rounds")
    }
    Score.textContent = (`Current scores human :${humanScore} computer :${computerScore} `)
}

buttons.forEach((button) => { button.addEventListener("click", (playRound))})
