
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

function getHumanChoice(){
    HumanChoice =( prompt('Type a choice between Rock, Paper and Scissors'))
    
    return HumanChoice
}

function  playRound(){
    ComputerChoice = getComputerChoice().toLowerCase()
    HumanChoice = getHumanChoice().toLowerCase()
   
     if(HumanChoice === ComputerChoice){
        
        return (`round is a draw ${HumanChoice } is similar to ${ComputerChoice}`)
    }
    else if (HumanChoice === 'rock' && ComputerChoice === 'scissors'){
        humanScore++
        return (`you win  as ${HumanChoice} beats ${ComputerChoice}`)
    }
    else if (HumanChoice === 'paper' && ComputerChoice === 'rock'){
        humanScore++
        return ( `You win as  ${HumanChoice} beats ${ComputerChoice}`)
    }
    else if (HumanChoice === 'scissors' && ComputerChoice === 'paper'){
        humanScore++
        return ( `You Win as  ${HumanChoice} beats ${ComputerChoice}`)
    }
    else
        computerScore++
        return( `You lose computer wins ${ComputerChoice} beats  ${HumanChoice}`)
    
    
}

function playGame(){

    humanScore = 0
    
    computerScore = 0
    for( i = 0 ; i < 5 ; i++){
    console.log( playRound());
    console.log(`Computer Score ${computerScore}`)
    console.log(`Human Score ${humanScore}`)
}
winner()
    }

function  winner(){
         if(humanScore > computerScore){
            console.log(`You win the game by ${humanScore}`)

        }else if (humanScore < computerScore){
            console.log(`Computer wins the game ${computerScore}`)
        }
        else{
            console.log(`Game is a tie`)
        }
    
 }    


    



playGame()