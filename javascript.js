const ComputerChoice = getComputerChoice().toLowerCase()
const HumanChoice = getHumanChoice().toLowerCase()
function getComputerChoice(){
   let random =  Math.floor(Math.random()*3)
     if (random == '1'){
        return 'Rock'}
    else if(random == '0'){
        return 'Paper'}
   else if (random == '2') {
    return 'Scissors'
   }
   
     return random
     
}

function getHumanChoice(){
    choice =( prompt('Type a choice between Rock, Paper and Scissors'))
    
    return choice
}

function playRound (ComputerChoice,HumanChoice){

   
    if(HumanChoice == ComputerChoice){
        return `Game is a Tie ${HumanChoice } is same as ${ComputerChoice}`
    }
    else if (HumanChoice === 'rock' && ComputerChoice === 'scissors'){
        return `You win ${HumanChoice} beats ${ComputerChoice}`
    }
    else if (HumanChoice === 'paper' && ComputerChoice === 'rock'){
        return `You win ${HumanChoice} beats ${ComputerChoice}`
    }
    else if (HumanChoice === 'scissors' && ComputerChoice === 'paper'){
        return `You Win ${HumanChoice} beats ${ComputerChoice}`
    }
    else {
        return `You lose ${ComputerChoice} beats  ${HumanChoice}`
    }

}
console.log(playRound(ComputerChoice,HumanChoice))