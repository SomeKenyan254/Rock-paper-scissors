let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
   let random =  Math.floor(Math.random()*3)
     if (random == '1'){
        message = 'Rock'}
    else if(random == '0'){
        message = 'Paper'}
   else if (random == '2') {
    message= 'Scissors'
   }
     return message
}
function getHumanChoice(){
    choice = prompt('Type a choice between Rock, Paper and Scissors')
}
function round(getComputerChoice,getHumanChoice){ 
}
console.log(getHumanChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())