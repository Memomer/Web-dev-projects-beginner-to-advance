const colors = ["green","red","rgba(122,122,200)","#f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
let oldRandomNumber 

btn.addEventListener('click', function(){
    //get random number between 0 - 3 
        const randomNumber = getRandomNumber()
        document.body.style.backgroundColor = colors[randomNumber]
        color.innerHTML = colors[randomNumber]
        oldRandomNumber=randomNumber; 
}) 


function getRandomNumber(){
    return Math.floor(Math.random()*colors.length) 
}