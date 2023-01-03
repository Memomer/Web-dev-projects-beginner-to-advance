const computerChoiceDisplay=document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
console.log(possibleChoices)
let compChoosed
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id   
    userChoiceDisplay.innerHTML = userChoice
    compChoosed=generateComputerChoice()
    console.log(compChoosed)
    console.log(possibleChoices[compChoosed].innerHTML)
    computerChoice=possibleChoices[compChoosed].innerHTML;
    computerChoiceDisplay.innerHTML=possibleChoices[compChoosed].innerHTML
    if(computerChoice===userChoice){
        result = 'Draw'
    }
    else{
        if((computerChoice ==='rock' && userChoice === 'paper') || (computerChoice=='paper' && userChoice == 'rock')){
             if(computerChoice ==='paper'){
                result='Computer Wins'
             }
             else{
              result='User wins'
             }
        }
         else if((computerChoice ==='paper' && userChoice === 'scissors') || (computerChoice ==='scissors' && userChoice === 'paper')){
            if(computerChoice ==='scissors'){
                result='Computer Wins'
             }
             else{
              result='User wins'
             }
         }
         else if((computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice==='scissors' && userChoice === 'rock')){
            if(computerChoice ==='rock'){
                result='Computer Wins'
             }
             else{
               result='User wins'
             }
         }
    }
    resultDisplay.innerHTML=result;
}))

function generateComputerChoice(){
    const randomNumber= Math.floor(Math.random() * possibleChoices.length) 
    console.log(randomNumber)
    return randomNumber
}


